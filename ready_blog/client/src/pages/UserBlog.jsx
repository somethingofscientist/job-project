import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard.js';


export const UserBlog = () => {
  const [blogs, setBlogs] = useState([]);

  // get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem('userId')
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}/`)
      if (data?.success) {
        setBlogs(data?.userBlog)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserBlogs();
  }, [])

  return (
    <div>
      {blogs.lenght > 0 ?
        (
          blogs.map((blog) => (
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
              name={blog.user}
              timing={blog.createdAt}
            />
          ))
        )
        :
        (<h1 style={{ textAlign: "center" }}>You have not created blog</h1>)

      }
    </div>
  )
}
