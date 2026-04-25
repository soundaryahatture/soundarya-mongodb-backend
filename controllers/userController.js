const User = require('../models/user');
const bcrypt = require('bcrypt');
const transporter = require('../utils/mail');
const welcomeTemplate = require('../templates/welcomeTemplate');

// ================= REGISTER =================
exports.register = async (req, res) => {
    try {
        const { fullName, emailAddress, mobileNo, password } = req.body;

        // Check if user exists
        const userExists = await User.findOne({ emailAddress });
        if (userExists) {
            return res.json({
                status: false,
                message: 'User already exists'
            });
        }

        // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = await User.create({
            fullName,
            emailAddress,
            mobileNo,
            password: hashPassword
        });

        // Send welcome email
        await transporter.sendMail({
            from: '"Node JS Application" <soundaryahatture@gmail.com>',
            to: emailAddress,
            subject: 'Welcome to Node JS App',
            html: welcomeTemplate(fullName)
        });

        res.json({
            status: true,
            message: 'User registered successfully',
            data: newUser
        });

    } catch (err) {
        console.log(err);
        res.json({
            status: false,
            message: 'Something went wrong'
        });
    }
};

// ================= LOGIN =================
exports.login = async (req, res) => {
    try {
        const { emailAddress, password } = req.body;

        // Check user
        const userExists = await User.findOne({ emailAddress });
        if (!userExists) {
            return res.json({
                status: false,
                message: 'User not found'
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, userExists.password);

        if (isMatch) {
            res.json({
                status: true,
                message: 'Login successful',
                data: userExists
            });
        } else {
            res.json({
                status: false,
                message: 'Wrong password'
            });
        }

    } catch (err) {
        console.log(err);
        res.json({
            status: false,
            message: 'Something went wrong'
        });
    }
};