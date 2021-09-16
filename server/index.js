const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const todoRoutes = require('./routes/todo.routes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);

const start = async () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log('MONGO-DB connected'))
      .catch((er) => console.log('MONGO-DB ERROR!!! ', er));

    await app.listen(process.env.PORT || 5000, () => {
      console.log(`server running on ${process.env.PORT} PORT`);
    });
  } catch (error) {
    console.log('error ', error);
  }
};

start();
