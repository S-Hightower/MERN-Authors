const AuthorsController = require("../controllers/authors.controller");

module.exports = app => {
    app.post("/api/new", AuthorsController.createAuthor);

    app.get("/", AuthorsController.findAllAuthors);
    app.get("/api/authors/:id", AuthorsController.findOneAuthor);

    app.put("/api/authors/:id/edit", AuthorsController.updateAuthor);

    app.delete("/api/authors/:id", AuthorsController.deleteAuthor);
}