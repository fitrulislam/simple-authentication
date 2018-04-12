const User = require('../models/user')

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

  }
}
