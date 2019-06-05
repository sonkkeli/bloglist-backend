const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const blogsRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.send('<p>continue to /api/blogs to see what you are looking for</p>')
})

app.use('/api/blogs', blogsRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app