const Authors = require("../models/authors.model");

    //Read All
    module.exports.findAllAuthors = (req, res) => {
        Authors.find({})
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.jsnon({message: "Something went wrong", error: err}))
    };

    //Read One
    module.exports.findOneAuthor = (req, res) => {
        Authors.findById({_id: req.params.id})
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    };

    //Create
    module.exports.createAuthor = (req, res) => {
        Authors.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    };

    //Update
    module.exports.updateAuthor = (req, res) => {
        Authors.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(result => res.json(updatedAuthor))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    };

    //Delete
    module.exports.deleteAuthor = (req, res) => {
        Authors.deleteOne({_id: req.params.id})
            .then(result => res.json(deletedAuthor))
            .catch(err => res.json({message: "Something went wrong", error: err}));
    };
