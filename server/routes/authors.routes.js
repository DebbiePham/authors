const AuthorController = require('../controllers/authors.controller');


module.exports = function(app){
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.patch('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
    app.get('/api/author/random', AuthorController.getRandomAuthor);
}



