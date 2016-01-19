var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    _id: { type: String, required: true },
    title: { type: String, maxlength: 140, required: true},
    description: { type: String, required: true },
    requirements: [{ type: String, ref: 'Course' }]
});



module.exports = schema;
