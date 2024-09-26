import React, { useState } from 'react'
import { BlogContext } from './BlogContext'

const BlogProvider = ({children}) => {
    const [blogState, setBlogstate]= useState({title:"Hello"});
  return (
    <BlogContext.Provider value={[blogState,setBlogstate]}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
