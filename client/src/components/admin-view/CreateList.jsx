import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Delete, Edit } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { deleteBlogService } from "@/services";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "../ui/table"

const CreateList = ({ listOfBlogs, refreshBlogs }) => {
  const navigate = useNavigate()

  const handleDelete = async (blogId) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?")
    if (!confirmed) return;

    const result = await deleteBlogService(blogId)
    if (result.success) {
      refreshBlogs(); // Refresh the blogs after delete
    } else {
      alert("Failed to delete blog!")
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-3xl font-extrabold">All Blogs</CardTitle>

        <Button onClick={() => navigate('/admin/create-new-blog')}>
          Create Blog
        </Button>
      </CardHeader>

      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Context</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listOfBlogs.length > 0 ? listOfBlogs.map((blog) => (
              <TableRow key={blog._id}>
                <TableCell className="font-medium">{blog?.title}</TableCell>
                <TableCell>{blog?.context}</TableCell>
                <TableCell className="justify-end flex items-center">
                  <Button
                    onClick={() => navigate(`/admin/edit-blog/${blog._id}`)}
                    className="md:mr-2"
                    size="sm"
                    variant="ghost"
                  >
                    <Edit className='h-6 w-6' />
                  </Button>
                  <Button
                    onClick={() => handleDelete(blog._id)}
                    size="sm"
                    variant="ghost"
                  >
                    <Delete className='h-6 w-6' />
                  </Button>
                </TableCell>
              </TableRow>
            )) : null}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default CreateList
