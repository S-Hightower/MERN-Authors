const AuthorsController = require("../controllers/authors.controller");

module.exports = app => {
    app.post("/", AuthorsController.createAuthor);

    app.get("/api/authors", AuthorsController.findAllAuthors);
    app.get("/api/authors/:id", AuthorsController.findOneAuthor);

    app.put("/api/authors/:id/edit", AuthorsController.updateAuthor);

    app.delete("/api/authors/:id", AuthorsController.deleteAuthor);
}