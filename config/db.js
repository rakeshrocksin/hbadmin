const MongoClient = require('mongodb').MongoClient;
const logger = require('../helpers/logger');




//Connect to local MongoDB thru Mongodb native 
MongoClient.connect(mongodbURL + mongodbName,(err,client) => {
    var db = client.db(mongodbName);
    if(err){
        return logger.err('Unable to connect to MongoDB Server')
    }

    logger.info('Connected to Native Mongodb.');

    // db.collection('Todos').insertOne({
    //     text: 'Some test data',
    //     completed: false
    // }, (err,result)=>{
    //     if (err){
    //         return logger.err('data could not be inserted.',err);
    //     }
    //     logger.info(JSON.stringify(result.ops));
    // });


    // db.collection('Users').insertOne({
    //     name: 'Rakesh',
    //     age: 25
    // }, (err,result)=>{
    //     if (err){
    //         return logger.err('data could not be inserted.',err);
    //     }
    //     logger.info(JSON.stringify(result.ops));
    // });

    client.close();
});