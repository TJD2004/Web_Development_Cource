const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('./routes/userRouter')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config();

const PORT = process.env.PORT || 3000;

//connectDB();
connectDB();

app.use(express.json());


app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})