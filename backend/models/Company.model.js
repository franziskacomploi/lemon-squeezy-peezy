const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const companySchema = new Schema({
  name: String,
  founded_in: Number,
  logo: String,
  description: String,
  sustainability_rating: Number,
});

module.exports = Company = mongoose.model('company', companySchema);
