var mongoose = require('mongoose');
const mongodbURL = 'mongodb://localhost:27017/';
const mongodbName = 'HBADMIN';

//Connect to local Mongo thru Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(mongodbURL+mongodbName);

module.exports = {mongoose};