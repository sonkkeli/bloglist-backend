const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

// GET ALL BLOGS
blogsRouter.get('/', (req, res) => {
  Blog
    .find({})
    .then(blogs => {
      res.json(blogs)
    })
})

// ADD BLOG
blogsRouter.post('/', (req, res) => {
  const body = req.body

  if (body.title === undefined || body.author === undefined || body.url === undefined ) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  var likes = (body.likes === undefined) ? 0 : body.likes

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: likes
  })

  blog.save().then(savedBlog => {
    res.json(savedBlog)
  })
})

// GET ONE BLOG
blogsRouter.get('/:id', (req, res, next) => {

  Blog.findById(req.params.id)
    .then(blog => {
      if (blog) {
        res.json(blog.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

// 4.13 blogilistan laajennus, step1, DELETE ONE BLOG
blogsRouter.delete('/:id', async (req, res, next) => {
  try {
    await Blog.findByIdAndDelete(req.params.id)
    res.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

// 4.14* blogilistan laajennus, step2, UPDATE BLOG
blogsRouter.put('/:id', async (req, res, next) => {
  const body = req.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }
  try {
    await Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
    updatedBlog => res.json(updatedBlog.toJSON())
  } catch (exception){
    next(exception)
  }
})

module.exports = blogsRouter