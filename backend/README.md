# E-Commerce API

This is a robust RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB. It features user authentication, role-based access control, product management, and follows best practices for security and performance.

## Features

- User authentication (register, login, get profile)
- Role-based access control (admin, seller, shopper)
- Product management (CRUD operations)
- Error handling and logging
- Security features (data sanitization, rate limiting, etc.)
- API documentation (with Postman collection)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)
- You have a MongoDB database (local or cloud-based like MongoDB Atlas)
- You have [Git](https://git-scm.com/downloads) installed (optional, for cloning the repository)

## Installing E-Commerce API

To install the E-Commerce API, follow these steps:

1. Clone the repository (or download the zip file):
   ```
   git clone https://github.com/crenshaw-1/e-commerce.git
   ```

2. Navigate to the project directory:
   ```
   cd backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `config.env` file in the `config` directory with the following content:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=30d
   JWT_COOKIE_EXPIRE=30
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string, and `your_jwt_secret` with a secure random string.

## Running E-Commerce API

To run E-Commerce API, follow these steps:

1. Start the server in development mode:
   ```
   npm run dev
   ```

2. For production:
   ```
   npm start
   ```

The server will start running at `http://localhost:5000` (or whatever PORT you've set in your config.env).

## API Documentation

You can find the full API documentation in the [Postman collection](link_to_your_postman_collection). Import this collection into Postman to see all available endpoints and example requests.

Here are some of the main endpoints:

### Users
- POST `/api/v1/users/register` - Register a new user
- POST `/api/v1/users/login` - Login user
- GET `/api/v1/users/profile` - Get user profile (protected)
- GET `/api/v1/users/all` - Get users profile (protected)
- PATCH `/api/v1/users/:id/role` - Update user role (admin only)
- DELETE `/api/v1/users/:id` - Delete user (admin only)

### Products
- POST `/api/v1/products` - Create a new product (seller only)
- GET `/api/v1/products` - Get all products
- GET `/api/v1/products/:id` - Get a single product
- PUT `/api/v1/products/:id` - Update a product (seller only)
- DELETE `/api/v1/products/:id` - Delete a product (seller only)

## License

This project uses the following license: [MIT License](https://github.com/crenshaw-1/e-Commerce/blob/main/LICENSE).