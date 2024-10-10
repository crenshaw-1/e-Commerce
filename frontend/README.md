# e-Commerce

This is a full-stack application built with React on the frontend and a backend API to manage products, users, and authentication. Follow the steps below to set up and start the application.

## Prerequisites

Before you start, ensure you have the following installed on your system:
- **Node.js** (v14 or later) and **npm** (Node Package Manager)
- **Git** for version control (optional but recommended)
- **Backend Server** (Make sure the backend API is up and running)

## Project Setup

### 1. Clone the Repository

Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/crenshaw-1/e-Commerce.git
```

Navigate to the project directory:
```bash
cd frontend
```

### 2. Install Dependencies

To install all required packages, run:
```bash
npm install
```

This will install all the dependencies specified in the `package.json` file.

### 3. Environment Setup

Ensure that the backend server is running and available at a specified URL. Typically, this would be something like `http://localhost:5000/` for local development.

### 4. Update API URLs

Before running the application, you need to update the `API_URLs` in the feature slices. These URLs are found in the following files:
- `features/products/productSlice.js`
- `features/users/userSlice.js`
- `features/auth/authSlice.js`

Make sure to update the API endpoints in these files to match your backend server's URL:
```javascript
// Example URL setting:
const API_URL = 'http://localhost:5000/api/v1/products';
```

> **IMPORTANT:** If you deploy your backend to a different environment (like a cloud service), make sure to update the `API_URL` accordingly.

### 5. Running the Application

To start the React development server, run:
```bash
npm start
```

This command will launch the app in development mode and open it in your default web browser at `http://localhost:3000/`. 

The page will automatically reload if you make edits to the code.

### 6. Running the Backend Server

Ensure your backend server is up and running. Instructions for setting up and running the backend can usually be found in the backend repository's README file.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner.

## Features

- **Authentication:** User login and registration.
- **User Management:** Create, update, and delete users.
- **Product Management:** View, add, update, and delete products.
- **Profile Management:** Update user profile information.

## Additional Notes

1. **Role-Based Authorization:** Users must have appropriate roles (admin, seller, shopper) to access certain features of the application.
2. **Redux DevTools:** You can use the Redux DevTools extension in your browser to inspect the application's state and debug actions.
3. **Handling API Errors:** Make sure that the backend server is properly configured to handle errors and return meaningful error messages.

## Common Issues and Solutions

- **CORS Errors:** If you encounter CORS (Cross-Origin Resource Sharing) issues, make sure your backend server allows requests from `http://localhost:3000`.
- **API Endpoint Issues:** Double-check that your API endpoints in the feature slices match those on your backend server.

## License

This project is licensed under the MIT License - see the [LICENSE](/workspace/e-Commerce/LICENSE) file for details.

