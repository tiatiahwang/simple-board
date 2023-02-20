const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const router = require('./router');

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT} port`);
});
