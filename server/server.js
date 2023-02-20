const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const router = require('./router');

const { sequelize } = require('./models');
sequelize
  .sync({ force: false }) // 서버 실행 시 MySQL과 연동되도록 함, force: true면 서버 실행 시 마다 테이블을 재생성, 테이블을 잘못 만든 경우에 true로 설정
  .then(() => {
    console.log('데이터베이스 연결 성공!');
  })
  .catch((err) => {
    console.error(err);
  });

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

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

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT} port`);
});
