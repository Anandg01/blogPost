import {createContext} from "react";

const BlogContext=createContext({
    blogs:[],
    openForm:false,
    editForm:false,
    editAllow:(blog)=>{},
    editBlog:(blog)=>{},
    editData:{},
    alowOpneForm:()=>{},
    disableOpenForm:()=>{},
    addBlog:(blog)=>{},
    removeBlog:(id)=>{},
})


export default BlogContext;