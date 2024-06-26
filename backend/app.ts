import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from 'express';
import { getPort } from './config/getEnvVars';
import bodyParser from 'body-parser';

import { initializeDatabase } from './config/database';
import authRoutes from './routes/auth/auth';

const app: Express = express();

const port = getPort();
app.use(bodyParser.json()); // application/json

// Setup response headers to get rid of CORS errors

// import cors from 'cors';
// app.use(
//   cors({
//     origin: 'https://yourproductiondomain.com',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//   })
// );

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err); // Log the error for server-side debugging

  const statusCode = err.statusCode || 500; // Default to 500 if statusCode not specified
  const errMessage = err.message;
  const errData = err.data;
  res.status(statusCode).json({ errMessage, errData });
};

app.use(errorHandler);

app.use('/auth', authRoutes);

// Server Initialization
async function initialize() {
  try {
    await initializeDatabase();

    app.listen(port);
    console.log(`Server is listening on port ${port}`);
  } catch (err) {
    console.error('Error occurred:', err);
  }
}

initialize();
