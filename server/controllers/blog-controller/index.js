import Blog from "../../models/Blog.js"


export const CreateBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body; 

        const blog = await Blog.create({
            title,
            content, 
            author
        });

        res.status(201).json({  
            success: true, 
            message: "Blog created successfully",
            data: blog
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Failed to create blog" 
        });
    }
};


export const GetBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        
        const blog = await Blog.findById(blogId)
            .populate('author', 'name email'); 
        
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Blog retrieved successfully",
            data: blog
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve blog",
            error: err.message
        });
    }
};

export const UpdateBlog = async (req, res) => {
    try{

        const {blogId} = req.params 

        const {title, content} = req.body 

        

        const blog = await Blog.findByIdAndUpdate(blogId, {
            title, 
            content}
            , {new:true})

        return res.status(200).json({
            success:true, 
            message:"Updated Successfully",
            data:blog
        })

    }
    catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"Update Failed"
        })
    }
}


export const DeleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params;

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            data: deletedBlog, 
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Failed to delete blog",
            error: err.message, 
        });
    }
};