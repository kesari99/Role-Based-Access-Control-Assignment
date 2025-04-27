import express from 'express'
import authenticate from '../../middleware/auth_middleware.js'
import { GetAllBlogs } from '../../controllers/user-controller/index.js'

const router = express.Router()


router.get('/blogs',authenticate, GetAllBlogs )


export default router