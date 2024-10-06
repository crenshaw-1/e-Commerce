const mongoose = require('mongoose');

mongoose.set('strictQuery', true); 

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;