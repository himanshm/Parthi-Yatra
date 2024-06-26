import { RequestHandler } from 'express';
import { getPrivateKey } from '../../../config/getEnvVars';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../../models/user';
import { validationResult } from 'express-validator';
import HttpError, { handleError } from '../../../config/httpError';
import {
  extractUsername,
  createTempPassword,
} from '../../../utils/utilFunctions';

const privateKey = getPrivateKey();

export const signup: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    const error = new HttpError(
      'Validation Failed! Entered data is incorrect!',
      422,
      errorMessages
    );

    return next(error);
  }

  try {
    const { fullName, email, role } = req.body;
    const username = extractUsername(email);
    const temporaryPassword = createTempPassword();

    const validRoles = ['user', 'admin'];

    if (role && !validRoles.includes(role)) {
      return next(new HttpError('Invalid role specified', 400));
    }

    const user = new User({
      fullName,
      email,
      username,
      password: temporaryPassword,
      role: role || 'user',
    });

    await user.save();
    res.status(201).json({
      user: { id: user._id, username, temporaryPassword, role: user.role },
      message:
        'User registered successfully. Please change your password upon first login.',
    });
  } catch (err) {
    handleError(err, req, res, next);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    const error = new HttpError(
      'Validation Failed! Entered data is incorrect!',
      422,
      errorMessages
    );

    return next(error);
  }

  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      const error = new HttpError(
        'A admin with this username could not be found!',
        401
      );

      return next(error);
    }

    if (user.isFirstLogin) {
      return res.status(200).json({
        message: 'This is your first login. Please change your password.',
        isFirstLogin: true,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      const error = new HttpError('Wrong Password', 401);
      return next(error);
    }

    const token = jwt.sign(
      {
        username: user.username,
        userId: user._id.toString(),
        role: user.role,
      },
      privateKey,
      { expiresIn: '2h' }
    );

    res
      .status(200)
      .json({ token, userId: user._id.toString(), role: user.role });
  } catch (err) {
    handleError(err, req, res, next);
  }
};

export const updatePassword: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => err.msg);
    const error = new HttpError(
      'Validation Failed! Entered data is incorrect!',
      422,
      errorMessages
    );

    return next(error);
  }

  const { username, newPassword } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const error = new HttpError(
        'An admin with this username could not be found!',
        401
      );

      return next(error);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    user.isFirstLogin = false;
    await user.save();
    res.json({
      message:
        'Password updated successfully. Please login with your new password.',
    });
  } catch (err) {
    handleError(err, req, res, next);
  }
};
