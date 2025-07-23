const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    minLength: 10,
    required: true,
    lowercase: true
  },
  
  phone: {
    type: Number,
    minLength: 10,
    required: true,
  },
  
  password: {
    type: String,
    minLength: 5,
    required: true,
  },
});

const User = model('User', userSchema);
module.exports = User;
