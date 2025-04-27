import { CardContent, Card } from '@/components/ui/card'
import CommonForm from '@/components/ui/common-form'
import { initailBlogFormControls } from '@/config'
import { AuthContext } from '@/context/auth-context'
import { BlogContext } from '@/context/blog-context'
import { createNewBlogService, getBlogByIdService, updateBlogService } from '@/services'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CreateNewBlogPage
 = () => {

    const {
        blogData, 
        setBlogData,

    } = useContext(BlogContext)

    const {auth} = useContext(AuthContext)

    const [currentBlogId, setCurrentBlogId] = useState(null)

    const params = useParams()


    const CheckIfIBlogFormValid = () => {
        return blogData && blogData.title !== '' && blogData.content !== ''
    }

    const handleBlogData = async (event) => {
        event.preventDefault()

        const finalBlogData = {...blogData, author:auth?.user?._id}

        console.log(finalBlogData, "finalBlogData")


        const data = currentBlogId !== null ? 
                        await updateBlogService(params?.blogId,finalBlogData ) :
        
                        await createNewBlogService(finalBlogData)

        if(data.success){
            setBlogData(prev => ({
                 title:"",
                content:"",
                
            }))

        }

        console.log(data, "data")

    }

    const fetchBlogDetails = async () => {
        const response = await getBlogByIdService(params?.blogId)

        if(response.success){
            console.log(response)
            setBlogData(prev => ({
                title:response.data.title,
                content:response.data.content
            }))
        }
    }

    useEffect(() => {
        if (currentBlogId !== null) fetchBlogDetails()
    }, [currentBlogId])

    useEffect(() => {
        if(params?.blogId) setCurrentBlogId(params?.blogId)
    }, [params?.blogId])




  return (
    <div className='container py-6 mx-auto '>
        <div className="flex justify-between items-center my-5">
        <h2 className='text-3xl font-extrabold'>Create new Blog</h2>



        </div>

        <Card>
            <CardContent>

                <CommonForm
                 formControls = {initailBlogFormControls}
                 buttonText='Create Blog'
                formData={blogData}
                setFormData={setBlogData}
                isButtonDisabled={!CheckIfIBlogFormValid()}
                
                handleSubmit={handleBlogData}
                
                />



            </CardContent>
        </Card>

       

    </div>
  )
}

export default CreateNewBlogPage
