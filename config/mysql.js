var mysql = require('mongoose');
const mysqlURL = 'mongodb://localhost:27017/';
const mysqlName = 'HBADMIN';

mysql.connect(mysqlURL+mysqlName);

module.exports = {mysql};