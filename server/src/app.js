//sequelize를 사용해 express와 MySQL을 연결

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const {userRouter, boardRouter} = require('./routers')


const { sequelize } = require('./db');

const app = express();


sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRouter)
app.use('/api', boardRouter)

module.exports = {app}