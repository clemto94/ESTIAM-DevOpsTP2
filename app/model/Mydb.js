const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mydb = new Schema({
    increment: Number
});

module.exports = mongoose.model('Mydb', Mydb);