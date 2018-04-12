const User = require('../models/user')
const jwt = require('jsonwebtoken')

module.exports = {
  signup: (req,res)=>{
    const newUser = new User(req.body.obj)
    newUser.save()
      .then(data=>{
        res.status(201).json({
          message: `user created`,
          data: data
        })
      })
      .catch(err=>{
        res.status(400).json({
          message: `user not created`
        })
      })
  },
  signin: (req,res)=>{
    User.find({
      username: req.body.obj.username
    })
    .then(user=>{
      if(user){
        if(user[0].password == req.body.obj.password){
          let token = jwt.sign({id: user[0]._id}, 'menguasai dunia')
          res.status(200).json({
            message: `this is user`,
            token: token
          })
        }
      } else {
        res.status(400).json({
          message: `User not found`
        })
      }
    })
    .catch(err=>{
      res.status(500).json({
        message: 'error'
      })
    })
  }
}
