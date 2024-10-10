const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

require('dotenv').config();

connectDB();

const products = require('./routes/product.routes');
const users = require('./routes/user.routes');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',  
    'http://localhost:3000',
    'https://5173-crenshaw1-ecommerce-f368xunkclu.ws-eu116.gitpod.io',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, 
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(mongoSanitize());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100
});
app.use(limiter);

app.use('/api/v1/products', products);
app.use('/api/v1/users', users);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});