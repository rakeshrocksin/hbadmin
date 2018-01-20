var merchant = require('../models/merchantModel');

module.exports = (app) => {

app.post('/addproduct',  (req, res) => {
    var addproduct = new merchant({
      mrcid: req.body.mrcid
  
    });
  
    res.render('index');
  });

};