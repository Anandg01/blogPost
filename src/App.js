import React, { useContext } from 'react'
import BlogContext from './store/BlogContext'
import BlogForm from './component/BlogForm'
import BlogList from './component/BlogsList'
const App = () => {

    const formCtx = useContext(BlogContext)

    const WriteBlogHnadler = () => {
        formCtx.alowOpneForm()
    }

    return <>
        <div style={{ textAlign: 'center', borderBottom: '2px solid ' }}>
            <h1>Blog Website</h1>
            <button onClick={WriteBlogHnadler}>Add new Bog</button>
        </div>
        {formCtx.openForm && <BlogForm />}
        <BlogList />
    </>
}

export default App;