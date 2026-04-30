# Bank Transfer App

## Project Overview
The Bank Transfer App is a web application that allows users to securely transfer money between accounts, view transaction histories, and manage their banking operations online. The application aims to streamline the banking experience with an intuitive user interface and robust backend.

## Features
- Secure money transfers between accounts
- User authentication and authorization
- Transaction history tracking
- Account management functionalities
- Responsive design for use on various devices

## Tech Stack
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure
```
bank-transfer-app/
├── client/                # Frontend code
├── server/                # Backend code
│   ├── models/            # Database models
│   ├── routes/            # API endpoints
│   ├── middleware/        # Express middleware
│   └── config/            # Configuration files
└── README.md              # Project documentation
```

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/GMIP121/bank-transfer-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd bank-transfer-app
   ```
3. Install the backend dependencies:
   ```bash
   cd server
   npm install
   ```
4. Install the frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```
5. Start the backend server:
   ```bash
   cd ../server
   npm start
   ```
6. Start the frontend development server:
   ```bash
   cd ../client
   npm start
   ```

## API Endpoints
- `POST /api/register`: Register a new user
- `POST /api/login`: User authentication
- `POST /api/transfer`: Transfer money between accounts
- `GET /api/transactions`: Retrieve transaction history

## Security Features
- Input validation and sanitization to prevent XSS and SQL injection attacks
- Password hashing using bcrypt
- Secure session management utilizing JWTs
- HTTPS implementation for secure data transfer

## Database Schema
The application uses a MongoDB database with the following collections:
- **Users**: Stores user information and authentication credentials
- **Transactions**: Records details of all transactions performed
- **Accounts**: Holds information about user accounts associated with the bank