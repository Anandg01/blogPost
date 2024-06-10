import React, { useState } from "react";
import BlogContext from './BlogContext'




const Uprovider = (props) => {
  const [blogs, setBlogs] = useState([{ id: 'q1', url: 'https://picsum.photos/200/300?grayscale', title: 'cat ', description: 'forest' }, { id: 'cv', url: 'https://picsum.photos/200/300?grayscale', title: 'lion', description: 'king' }])
  const [shoeForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({})
  const openFormHandler = () => {
    setShowForm(true);
  }
  const closeFormHandler = () => {
    setShowForm(false)
  }

  const addBlogHandler = (blog) => {
    setBlogs(blogs => blogs.concat(blog))
    closeFormHandler();
  }

  const removeBlogHandler = (id) => {
    setBlogs(blogs => blogs.filter(blog => blog.id !== id))
  }


  const editAllow = (blog) => {
    setShowForm(true);
    setEditData(blog);
    setEditMode(true)
  }

  const editBlogHandler = (updatedBlog) => {
    setBlogs(blogs => blogs.map(blog => (blog.id === updatedBlog.id ? updatedBlog : blog)));
    setEditMode(false)
    closeFormHandler();
  };


  const ucontext = {
    blogs: blogs,
    openForm: shoeForm,
    editForm: editMode,
    editAllow: editAllow,
    editData: editData,
    editBlog:editBlogHandler,
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