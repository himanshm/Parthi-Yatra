import mongoose, { Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

enum UserRole {
  User = 'user',
  Admin = 'admin',
}

interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  username: string;
  isFirstLogin: boolean;
  role: UserRole;
}

type UserModel = Model<IUser>;

const userSchema = new Schema<IUser, UserModel>({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  isFirstLogin: {
    type: Boolean,
    required: true,
    default: true, // Assume true at creation
  },

  role: {
    type: String,
    enum: UserRole,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

const User = mongoose.model<IUser, UserModel>('User', userSchema);

export default User;
