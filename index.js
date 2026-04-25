const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
const userRoute = require('./routes/userRoute');
const studentRoute = require('./routes/studentRoute');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Request logging
server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
server.use('/api', userRoute);
server.use('/student', studentRoute);

// Home route
server.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'Student Management System API',
        endpoints: {
            user: {
                register: 'POST /api/register',
                login: 'POST /api/login'
            },
            student: {
                add: 'POST /student/add-student',
                getAll: 'GET /student/get-students',
                update: 'PUT /student/update-student/:id',
                delete: 'DELETE /student/delete-student/:id'
            }
        }
    });
});

// 404 handler
server.use((req, res) => {
    res.status(404).json({
        status: false,
        message: 'Route not found'
    });
});

// Error handler
server.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: false,
        message: 'Something went wrong!',
        error: err.message
    });
});

// Start server
const PORT = process.env.PORT || 1258;
server.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
    console.log(`📝 API URL: http://localhost:${PORT}`);
});