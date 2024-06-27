require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const petRoutes = require('./routes/petRoutes')
// const workoutRoutes = require('./routes/workouts')
// const userRoutes = require('./routes/user')
const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const requireAuth = require('./middleware/requireAuth')
// const cookieSession = require('cookie-session')
// const session = require('express-session')

// express app
const app = express()

const dbURI = 'mongodb+srv://spike8884:carmen22@cluster0.elpov3o.mongodb.net/';

// middleware
app.use(express.json())
app.use(cors())
app.use('/images', express.static(path.join(__dirname, "uploads")))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

mongoose.set('strictQuery', false)
// app.use('/api/user', userRoutes)
app.use('/pets', petRoutes);
// connect to db
mongoose.connect(dbURI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })