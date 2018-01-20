//Author: Rakesh
// npm packages
const moment = require('moment');
const express =require('express');
const hbs =require('hbs');
const _ = require('lodash');
const os = require('os');
const bodyParser = require('body-parser');

//propreitary packages
const logger = require('./helpers/logger');
const apiController = require('./controllers/apiController');

var user = os.userInfo();
var app = express();
var argv =yargs.argv;
var command = process.argv[2];
logger.info(`arguments {argv} : ` + argv);

// If the port env variable is set then use it else use port 3000 for development.
const port = process.env.PORT || 3000;
logger.info('Application is starting.....');


//Register the partials and View engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');


// To initiate the maintenance page 
/**
app.use((req,res,next)=>{
  res.render('maintenance.hbs');

});
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/assets',express.static(__dirname+'./public'));
hbs.registerHelper('getCurrentYear',new Date().getFullYear());

apiController(app);


app.listen(port, () =>{
  logger.info(`Server is up on port ${port}`);
});

module.exports.app = app;