import { initialBlogFormData } from "@/config"
import { createNewBlogService, getAllBlogService } from "@/services"
import { createContext, useEffect, useState } from "react"

export const BlogContext = createContext()

const BlogProvider = ({children}) => {

    const [blogData, setBlogData] = useState(initialBlogFormData)
    const [blogList, setBlogList] = useState([])

    const getAllBlogs = async () => {
        const data = await getAllBlogService()
        
        if(data.success){
            return data
        }
    }
    

   



  return <BlogContext.Provider value={{
    blogData, 
    setBlogData,
    getAllBlogs

  }}>
    {children}
  </BlogContext.Provider>
  
}

export default BlogProvider