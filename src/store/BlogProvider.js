import React, { useState } from "react";
import BlogContext from './BlogContext'




const Uprovider = (props) => {
  const [blogs, setBlogs] = useState([{ id: 'q1', url: 'https://picsum.photos/200/300?grayscale', title: 'fuck', description: 'lul' }, { id: 'cv', url: 'https://picsum.photos/200/300?grayscale', title: 'fuck', description: 'lul' }])
  const [shoeForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState({})
  const openFormHandler = () => {
    setShowForm(true);
  }
  const closeFormHandler = () => {
    setShowForm(false)
  }

  const addBlogHandler = (blog) => {
    setBlogs(blogs => blogs.concat(blog))
  }

  const removeBlogHandler = (id) => {
    setBlogs(blogs => blogs.filter(blog => blog.id !== id))
  }


  const editAllow = (blog) => {
    setShowForm(true);
    setEditData(blog)
  }

  const ucontext = {
    blogs: blogs,
    openForm: shoeForm,
    editForm: false,
    editAllow: editAllow,
    editData: editData,
    alowOpneForm: openFormHandler,
    disableOpenForm: closeFormHandler,
    addBlog: addBlogHandler,
    removeBlog: removeBlogHandler
  }

  return <BlogContext.Provider value={ucontext}>
    {props.children}
  </BlogContext.Provider>
}

export default Uprovider;