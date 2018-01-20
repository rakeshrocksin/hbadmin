const mongoose = require('mongoose');
const logger = require('../helpers/logger');

const mongodbURL = 'mongodb://localhost:27017/';

mongoose.Promise = global.Promise;

mongoose.connect(mongodbURL);

