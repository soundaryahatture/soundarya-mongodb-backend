const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://soundarya_db_user:soundarya%40123@db.jkszrl3.mongodb.net/soundarya');
        console.log('Database Connected');
    } catch (err) {
        console.log('Database connection failed');
        console.log(err);
    }
};

module.exports = connectDB;