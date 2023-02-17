const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

const CLIENT_URL = 'http://localhost:3000';
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
