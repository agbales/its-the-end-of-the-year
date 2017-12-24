const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recapSchema = new Schema({
  email: String,
  year: Number,
  title: String,
  content: String
});

const Recap = mongoose.model('Recap', recapSchema);
module.exports = Recap;