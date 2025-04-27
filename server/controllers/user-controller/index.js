import Blog from "../../models/Blog.js"


export const GetAllBlogs = async (req, res) => {

    try{

        const blogs = await Blog.find({})
    
        if (!blogs){
            res.status(400).json({
                message:"Blogs not found",
                success:false
            })
        }

        res.status(200).json({
            success:true,
            message:"Successfully fetched users blog",
            data:blogs
        })

    }
    catch(err){
        res.status(500).json({
            success:true,
            message:"Failed to get the users blog"
        })
    }
   




}