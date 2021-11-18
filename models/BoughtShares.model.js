const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const boughtshareSchema = new Schema({
  name: String,
  company: {type: Schema.Types.ObjectId, ref: 'Company'},
  originalShare: {type: Schema.Types.ObjectId, ref: 'Company'},
  price: Number,
  user: String,
  boughtAmount: Number,
});

module.exports = BoughtShare = mongoose.model('boughtshare', boughtshareSchema);
