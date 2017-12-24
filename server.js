const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const router = require('./routes/routes.js')
const bodyParser = require('body-parser')
// body parser
// cookie parser at some point

// app.use(express.static('/public'))

app.use(express.static('./public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bay's old school"`)
})



module.exports = app;
