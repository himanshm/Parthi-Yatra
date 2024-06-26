import mongoose from 'mongoose';
import { getConnectionString } from './getEnvVars';

export const initializeDatabase = async () => {
  const connectionString = getConnectionString();

  try {
    await mongoose.connect(connectionString);
    console.log('Successfully connected to the database!');
  } catch (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
};
