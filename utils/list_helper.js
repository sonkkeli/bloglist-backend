const dummy = ( blogs ) => {
  return 1
}

const totalLikes = ( blogs ) => {
  var likes = 0
  for ( var i = 0 ; i < blogs.length ; i++ ){
    likes += blogs[i].likes
  }
  return likes
}

const favouriteBlog = ( blogs ) => {
  var maxLikes = 0
  var favBlog = ''
  for ( var i = 0 ; i < blogs.length ; i++ ){
    if (blogs[i].likes > maxLikes){
      maxLikes = blogs[i].likes
      favBlog = blogs[i]
    }
  }
  if (blogs.length > 0){
    return {
      title: favBlog.title,
      author: favBlog.author,
      likes: favBlog.likes
    }
  } else {
    return ''
  }
}

const mostBlogs = ( blogs ) => {

  if (blogs.length === 0){
    return ''
  }

  var bloggers = [{
    author:blogs[0].author,
    blogs: 1
  }]

  for ( var i = 0 ; i < blogs.length ; i++ ){
    var found = false
    var foundIndex = 0
    for ( var j = 0 ; j < bloggers.length ; j++ ){
      if (bloggers[j].author == blogs[i].author){
        found = true
        foundIndex = j
      }
    }
    if (found) {
      bloggers[foundIndex].blogs += 1
    } else {
      bloggers.push({
        author:blogs[i].author,
        blogs: 1
      })
    }
  }

  var most = bloggers[0]
  for ( var k = 0 ; k < bloggers.length ; k++ ){
    if (bloggers[k].blogs > most.blogs){
      most = bloggers[k]
    }
  }

  return most
}

const mostLikes = ( blogs ) => {

  if (blogs.length === 0){
    return ''
  }

  var bloggers = [{
    author: blogs[0].author,
    likes: blogs[0].likes
  }]

  for ( var i = 0 ; i < blogs.length ; i++ ){
    var found = false
    var foundIndex = 0
    for ( var j = 0 ; j < bloggers.length ; j++ ){
      if (bloggers[j].author == blogs[i].author){
        found = true
        foundIndex = j
      }
    }
    if (found) {
      bloggers[foundIndex].likes += blogs[i].likes
    } else {
      bloggers.push({
        author: blogs[i].author,
        likes: blogs[i].likes
      })
    }
  }

  var most = bloggers[0]
  for ( var k = 0 ; k < bloggers.length ; k++ ){
    if (bloggers[k].likes > most.likes){
      most = bloggers[k]
    }
  }

  return most
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}