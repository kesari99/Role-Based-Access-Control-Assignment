import express from 'express'
import authenticate from '../../middleware/auth_middleware.js'
import { CreateBlog, DeleteBlog, GetBlogById, UpdateBlog } from '../../controllers/blog-controller/index.js'

const router = express.Router()


router.post('/create-blog',authenticate, CreateBlog)
router.get('/get-blog/:blogId',authenticate, GetBlogById)
router.patch('/update-blog/:blogId', authenticate, UpdateBlog)
router.delete('/delete/:blogId', authenticate, DeleteBlog)


export default router