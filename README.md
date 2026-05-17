# Backend API

A Node.js Express backend server with authentication and breach data handling.

## Features

- **Authentication** - User login/signup with bcrypt password hashing
- **Breach Data Management** - Handle and retrieve breach information
- **Database** - MySQL database integration
- **Validation** - Request validation using Joi
- **CORS** - Cross-origin resource sharing enabled
- **Cookie Support** - Session management with cookies

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **Authentication**: bcrypt
- **Validation**: Joi
- **Development**: Nodemon

## Installation

```bash
npm install
```

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=database_name
PORT=5000
```

## Available Scripts

### Development
```bash
npm run dev
```
Runs the server with Nodemon for auto-restart on file changes.

## Project Structure

```
src/
├── index.js              # Application entry point
├── connection.js         # Database connection setup
├── router.js             # Route definitions
├── controllers/          # Route controllers
│   ├── auth.js          # Authentication logic
│   └── breached.js      # Breach data handlers
├── routes/              # Route definitions
│   ├── auth.js          # Auth endpoints
│   └── breached.js      # Breach endpoints
└── utils/               # Utility functions
    ├── error.js         # Error handling
    └── respo.js         # Response formatting
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration

### Breach Data
- `GET /api/breached` - Get breach information

## Database

Configure MySQL connection in `.env` file. The application will connect to the database on startup.

## License

ISC
