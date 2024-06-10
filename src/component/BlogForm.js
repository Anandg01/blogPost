import React, { useState, useContext, useEffect } from "react";
import BlogContext from "../store/BlogContext";
import Model from "./UI/Model";

const UserForm = (props) => {
    const blogCtx = useContext(BlogContext);
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { editForm ,editData} = blogCtx
    useEffect(() => {
        if (editForm) {
            const data = editData;
            setUrl(data.url);
            setDescription(data.description);
            setTitle(data.title)
        }
    }, [editData, editForm])

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const urlChangeHandler = (e) => {
        setUrl(e.target.value)
    }
    const desChangeHandler = (e) => {
        setDescription(e.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const id = Math.random().toString(36).slice(2, 9)
        const blog = {
            id,
            url,
            title,
            description
        }
        if (editForm) {
            blogCtx.editBlog({
                id:editData.id,
                url,
                title,
                description
            })
        }
        else {
            blogCtx.addBlog(blog)
        }
    }

    return <Model>
        <form onSubmit={formSubmitHandler}>
            <label>Image Url:</label>
            <input onChange={urlChangeHandler} value={url} type="text" />
            <label>Title:</label>
            <input onChange={titleChangeHandler} value={title} type="text" />
            <label>Blog Description:</label>
            <input onChange={desChangeHandler} value={description} type="text" />
            <div style={{ marginLeft: '50%', marginTop: '5%' }}>
                <button type="submit" >{editForm ? 'Edit' : 'Add'} Blog</button>
            </div>
        </form>
        <button type="close" onClick={blogCtx.disableOpenForm}>Close</button>
    </Model>
}


export default UserForm;