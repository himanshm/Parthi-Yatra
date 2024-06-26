import { Router } from 'express';
import { body } from 'express-validator';
import { login, signup, updatePassword } from '../../controllers/auth/auth';
import User from '../../models/user';

const router = Router();

router.put(
  '/signup',
  [
    body('fullName').notEmpty().withMessage('Full Name is Required!'),
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email!')
      .custom(async (value, { req }) => {
        const adminDoc = await User.findOne({ email: value });
        if (adminDoc) {
          return Promise.reject(
            'Email address already exists. Please pick a different one!'
          );
        }
      })
      .normalizeEmail(),
  ],
  signup
);

router.post('/login', [], login);

router.post(
  '/update-password',
  [
    body('username').notEmpty().withMessage('Username is Required!'),
    body('newPassword')
      .trim()
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ],
  updatePassword
);

export default router;
