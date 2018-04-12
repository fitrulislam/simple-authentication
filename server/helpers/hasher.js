var bcrypt = require('bcrypt');
const saltRounds = 99;

function hasher(password){
  bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    return hash
  })
}

module.exports = {
  hasher: hasher
}
