var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
    BlogFelipeCtrl = require('./controllers/blogFelipe');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

// API rutas
var blogFelipe = express.Router();

blogFelipe.route('/blogFelipe')  
  .get(BlogFelipeCtrl.findAllBlogFelipe)
  .post(BlogFelipeCtrl.addBlogFelipe);

blogFelipe.route('/blogFelipe/:id')  
  .get(BlogFelipeCtrl.findById)
  .put(BlogFelipeCtrl.updateBlogFelipe)
  .delete(BlogFelipeCtrl.deleteBlogFelipe);

app.use('/api', blogFelipe); 


app.use(router);

mongoose.connect('mongodb://localhost/blogFelipe', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {  
  console.log("Node server running on http://localhost:3000");
  });
});
