const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const shareSchema = new Schema({
  name: String,
  from_company: {type: Schema.Types.ObjectId, ref: 'Company'},
  price: Number,
  issued_on: Date,
  amount: Number,
});

module.exports = Share = mongoose.model('share', shareSchema);
