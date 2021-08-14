const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());

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

    await app.listen(process.env.PORT, () => {
      console.log(`server running on ${process.env.PORT} PORT`);
    });
  } catch (error) {
    console.log('error ', error);
  }
};

start();
