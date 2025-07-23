const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONOGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true, 
        });
        console.log("Successfully Connected")
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
