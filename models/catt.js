const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cattSchema = new Schema({
    content: String,
    userId: String,
    imgUrl: String
});

var Contact = module.exports = mongoose.model('Catt', cattSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
};
