import 'dotenv/config';

// Create a secret key for JWT TOKEN
// import crypto from 'crypto';

// const secretKey = crypto.randomBytes(32).toString('hex');
// console.log(secretKey);

export const getPrivateKey = () => {
  const privateKey = process.env.JWT_SECRET_KEY;
  if (!privateKey) {
    throw new Error('No Private key exists');
  }
  return privateKey;
};

export const getConnectionString = () => {
  const connectionString = process.env.MONGODB_URI;
  if (!connectionString) {
    throw new Error('Database connection string is not provided!');
  }
  return connectionString;
};

export const getPort = () => {
  const port = process.env.PORT || 3000;
  if (!port) {
    throw new Error('No Connection port is provided!');
  }
  return port;
};
