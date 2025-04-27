import axiosInstance from '@/api/axiosInstance.js';


export async function registerService(signUpFormData){
    const {data} = await axiosInstance.post('/auth/register', {
        ...signUpFormData,
    })

    return data
}


export async function loginService(formData){
    const {data} = await axiosInstance.post('/auth/login', {
        ...formData,
        
    })

    return data
}


export async function checkAuthService(){
    try {
        const { data } = await axiosInstance.get("/auth/check-auth");
        return data;
      } catch (err) {
        
        return { success: false, message: "Authentication failed" };
      }
}

export async function createNewBlogService(formData){
    try{
        const {data} = await axiosInstance.post("/blog/create-blog",formData);
        return data

    } catch(err){
        return { success: false, message: "Failed to create Blog axios" };


        
    }
}

export async function getAllBlogService(){
    try{
        const {data} = await axiosInstance.get("/user/blogs");
        return data

    } catch(err){
        return { success: false, message: "Failed to get Blog axios" };


        
    }

}

export async function updateBlogService(blogId, formData) {
    try {
        const { data } = await axiosInstance.patch(`/blog/update-blog/${blogId}`, formData);
        return data;
    } catch (err) {
        return { success: false, message: "Failed to update Blog" };
    }
}


export async function getBlogByIdService(blogId) {
    try {
        const { data } = await axiosInstance.get(`/blog/get-blog/${blogId}`);
        return data;
    } catch (err) {
        return { success: false, message: "Failed to get blog details" };
    }
}

export async function deleteBlogService(blogId) {
    try {
        const { data } = await axiosInstance.delete(`/blog/delete/${blogId}`);
        return data;
    } catch (err) {
        return { success: false, message: "Failed to delete Blog" };
    }
}