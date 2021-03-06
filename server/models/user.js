const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String
},{
  timestamps: true
})

let User = mongoose.model('Users', userSchema)

module.exports = User
