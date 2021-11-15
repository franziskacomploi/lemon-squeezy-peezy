const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: String,
    profileImg: Object,
    description: String,
  },
  {
    timestamp: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = User = mongoose.model('user', userSchema);
