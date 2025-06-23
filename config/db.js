const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully connected on cloud');
    } catch (error) {
        console.error('Some error occurred:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
