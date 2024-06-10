import {createContext} from "react";

const BlogContext=createContext({
    blogs:[],
    openForm:false,
    editForm:false,
    editAllow:()=>{},
    editDisable:()=>{},
    alowOpneForm:()=>{},
    disableOpenForm:()=>{},
    addBlog:(user)=>{},
    removeBlog:(id)=>{},
})


export default BlogContext;