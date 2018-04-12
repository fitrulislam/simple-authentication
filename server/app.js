const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const port = 3000
const url = 'mongodb://localhost/db_lc'
mongoose.connect(url, (err)=>{
  if (err) throw err
  console.log(`Connected to database`)
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req,res)=>{
  res.send(`I'm Home`)
})
app.use('/users', require('./routes/user'))

app.listen(port, ()=>{
  console.log(`App listen on ${port}`)
})
