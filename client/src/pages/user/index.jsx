import React, { useEffect, useState } from 'react'
import { getAllBlogService } from '@/services'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const UserHomePage = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      try {
        const response = await getAllBlogService()
        if (response.success) {
          setBlogs(response.data || [])
        } else {
          console.error("Failed to fetch blogs:", response.message)
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <div className="container py-6 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold">Latest Blogs</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-8">Loading blogs...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-8">No blogs available at the moment.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Title</TableHead>
                  <TableHead>Content Preview</TableHead>
                  <TableHead className="">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog._id}>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell>
                      {blog.content.length > 100
                        ? `${blog.content.substring(0, 100)}...`
                        : blog.content}
                    </TableCell>
                   
                    <TableCell>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default UserHomePage