//Author: Rakesh
const moment = require('moment');
const express =require('express');// To be removed
const hbs =require('hbs');
const _ = require('lodash');
const os = require('os');
const yargs = require('yargs');
const logger = require('./helpers/logger');

var user = os.userInfo();
var app = express();
var argv =yargs.argv;

var command = process.argv[2];
var port = process.env.port || 3000;
logger.info('Application up and running.');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

logger.info(`arguments {argv} : ` + argv);
// If the port env variable is set then use it else use port 3000 for development.


// To initiate the maintenance page 
/**
app.use((req,res,next)=>{
  res.render('maintenance.hbs');

});
 */

app.use('/assets',express.static(__dirname+'./public'));



hbs.registerHelper('getCurrentYear',new Date().getFullYear());


// respond to the main index URL
app.get('/', (req, res) => {

  res.render('pages/index');
});

app.get('/about',  (req, res) => {
  res.render('pages/about');
});

app.get('/login',  (req, res) => {
  res.render('index');
});

app.get('/signup',  (req, res) => {
  res.render('index');
});

app.get('/addmerchant',  (req, res) => {
  res.render('index');
});

app.get('/addproduct',  (req, res) => {
  res.render('index');
});

app.get('/addnotification',  (req, res) => {
  res.render('index');
});


app.listen(3000);