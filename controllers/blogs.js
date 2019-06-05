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

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: 0
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

// DELETE ONE BLOG
blogsRouter.delete('/:id', (req, res, next) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(res.status(204).end())
    .catch(error => next(error))
})

// UPDATE BLOG
blogsRouter.put('/:id', (req, res, next) => {
  const body = req.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  }

  Blog.findByIdAndUpdate(req.params.id, blog, { new: true })
    .then(updatedBlog => {
      res.json(updatedBlog.toJSON())
    })
    .catch(error => next(error))
})

module.exports = blogsRouter