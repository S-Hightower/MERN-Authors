const Authors = require("../models/authors.model");

    //Read All
    module.exports.findAllAuthors = (req, res) => {
        Authors.find({})
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json(err));
    };

    //Read One
    module.exports.findOneAuthor = (req, res) => {
        Authors.findById({_id: req.params.id})
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json(err));
    };

    //Create
    module.exports.createAuthor = (req, res) => {
        const {name} = req.body;
        Authors.create({name})
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    };

//note added runvalidators in update!!!

    //Update
    module.exports.updateAuthor = (req, res) => {
        const {name} = req.body;
        Authors.findOneAndUpdate({_id: req.params.id}, {name}, {new:true,runValidators: true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err));
    };

    //Delete
    module.exports.deleteAuthor = (req, res) => {
        Authors.deleteOne({_id: req.params.id})
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.json(err));
    };
