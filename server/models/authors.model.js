const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    name: String
}, {timestamps: true});

const Authors = mongoose.model("Author", AuthorSchema);

module.exports = Authors;