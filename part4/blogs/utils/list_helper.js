/* eslint-disable no-unused-vars */
const _ = require('lodash')

const returnAuthor = (blog) => {
  return blog.author
}

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((accumulator, blog) => accumulator + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  let favBlog = null
  for (let i = 0; i < blogs.length; i++) {
    if (!favBlog || favBlog.likes < blogs[i].likes) {
      favBlog = blogs[i]
    }
  }
  return favBlog
}

const mostBlogs = (blogs) => {
  const counts = _.countBy(blogs, returnAuthor)
  let max = 0
  let maxAuthor = ''
  for (var blog in counts) {
    if (counts[blog] > max) {
      max = counts[blog]
      maxAuthor = blog
    }
  }
  return {
    author: maxAuthor,
    blogs: max
  }
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}