//File: controllers/blogFelipe.js
var mongoose = require('mongoose');  
var BlogFelipe  = mongoose.model('BlogFelipe');

//GET
exports.findAllBlogFelipe = function(req, res) {  
    BlogFelipe.find(function(err, blogFelipe) {
    if(err) res.send(500, err.message);

    console.log('GET /blogFelipe')
        res.status(200).jsonp(blogFelipe);
    });
};

//GET
exports.findById = function(req, res) {  
    BlogFelipe.findById(req.params.id, function(err, blogFelipe) {
    if(err) return res.send(500. err.message);

    console.log('GET /blogFelipe/' + req.params.id);
        res.status(200).jsonp(blogFelipe);
    });
};


  //POST
exports.addBlogFelipe = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var blogFelipe = new BlogFelipe({
        autor:    req.body.autor,
        email:  req.body.email,
        contenido:   req.body.contenido
    });

    blogFelipe.save(function(err, blogFelipe) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(blogFelipe);
    });
};
//PUT
exports.updateBlogFelipe = function(req, res) {  
    BlogFelipe.findById(req.params.id, function(err, blogFelipe) {
        blogFelipe.autor   = req.body.autor;
        blogFelipe.email = req.body.email;
        blogFelipe.comentario  = req.body.comentario;


        blogFelipe.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(blogFelipe);
        });
    });
};



//DELETE
exports.deleteBlogFelipe = function(req, res) {  
    BlogFelipe.findById(req.params.id, function(err, blogFelipe) {
        blogFelipe.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};


  //Link rutas y funciones
  app.get('/blogFelipe', findAllbBlogFelipe);
  app.get('/blogFelipe/:id', findById);
  app.post('/blogFelipe', addBlogFelipe);
  app.put('/blogFelipe/:id', updateBlogFelipe;
  app.delete('/blogFelipe/:id', deleteBlogFelipe);

}
