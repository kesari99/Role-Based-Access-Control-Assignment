import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
    },
    createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;