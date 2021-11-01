const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema(
  {
    name: String,
    profileImg: String,
    description: String,
    shares: {type: Schema.Types.ObjectId, ref: 'User'},
  },
  {
    timestamp: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = User = mongoose.model('user', userSchema);
