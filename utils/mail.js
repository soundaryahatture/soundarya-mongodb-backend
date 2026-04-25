const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'soundaryahatture@gmail.com',
        pass: 'rgrc frtl xqvh ajqt'
    }
});

module.exports = transporter;