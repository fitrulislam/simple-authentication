const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const {hasher} = require('../helpers/hasher')

module.exports = {
  signup: (req,res)=>{
    User.find({
      email: req.body.obj.email
    })
    .then(user=>{
      if(user){
        res.status(200).json({
          message: 'Email is registered, try another email'
        })
      } else {
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
      }
    })
    .catch(err=>{
      res.status(400).json({
        message: err
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
          let token = jwt.sign({id: user[0]._id}, 'secret')
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
