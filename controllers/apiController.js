var config = require('./config/config');

module.exports = function(app){
    
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
    
    
   
    
   
    
    app.get('/addnotification',  (req, res) => {
      res.render('index');
    });
    


    
    app.get('/api/todos/:uname',function(req,res){
        
        Todos.find({ username : req.params.uname},
            function(err,todos){
                if (err) throw err;
                
                    res.send(todos);

        });

    });

    app.get('/api/todos/:id',function(req,res){
        
        Todos.findById({ username : req.params.id},
            function(err,todos){
                if (err) throw err;
                
                    res.send(todos);

        });

    });


    app.post('/api/todos',function(req,res){
        
        if (req.body.id){
            Todos.findByIdAndUpdate(req.body.id,
                {todo: req.body.todo,
                    isDone:req.body.isDone,
                    hasAttachment: req.body.hasAttachment},function(err,todo){

                if(err) throw err;

                res.send('Success')
            });
        } else{

            var newTodo = Todos({
                username: 'Test',
                todo: req.body.todo,
                isDone:req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });

            newTodo.save(function(err){
                if(err) throw err;
                
                res.send('Success');
            });
        }   

    });


    app.post('/api/todos',function(req,res){
        
            Todos.findByIdAndRemove(req.body.id, function(err){

                if(err) throw err;
                res.send('Success')
            });
       

    });
    
}

