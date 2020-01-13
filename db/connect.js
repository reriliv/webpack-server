const mongoose = require('mongoose');
const config = require('../config/config.default');

const DBURI = `mongodb://${config.username}:${config.password}@${config.ip}:${config.port}/${config.dbName}`;
mongoose.connect(DBURI, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (e) => {
  console.error('connection error:', e);
});

db.once('open', (callback) => {
  console.log('已连接数据库');
  console.log(db);
});

module.exports = db;
