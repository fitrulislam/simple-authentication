const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: {type: String, unique: true},
  username: {type: String, unique: true},
  password: String
},{
  timestamps: true
})

let User = mongoose.model('Users', userSchema)

module.exports = User
