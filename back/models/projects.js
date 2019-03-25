var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name: String,
    desc: String,
    stack_front: [String],
    stack_back: [String],
    pic_url: String,
    days_spent: Number,
    idproject: Number
});

module.exports = mongoose.model('projects', projectSchema);
