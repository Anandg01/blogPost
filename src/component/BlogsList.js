import React, { useContext } from "react";
import BlogContext from "../store/BlogContext";

const BlogList = (props) => {
    const blogCtx = useContext(BlogContext)
    const blogs = blogCtx.blogs;

    const BlogDeleteHandler = (e) => {
        blogCtx.removeBlog(e.target.id)
    }
    
    const bogEditaHandler=(blog)=>{
        blogCtx.editAllow(blog)
    }

    const blogList = blogs.map(blog => {
        return <div key={blog.id} style={{ width: '300px', border: '2px solid red' }}>

            <h1>{blog.title}</h1>
            <img src={blog.url} alt="Girl in a jacket" />
            <p>{blog.description}</p>
            <button id={blog.id} onClick={()=>(bogEditaHandler(blog))} >Edit Blog</button>
            <button id={blog.id} onClick={BlogDeleteHandler}>Delete Blog</button>
        </div>
    })

    return <>
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            {blogList}
        </div>
    </>

}


export default BlogList;