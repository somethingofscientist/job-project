import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";


const BlogDetail = () => {
   const [blog, setBlog] = useState({});
   const id = useParams().id;
   const navigate = useNavigate();
   const [inputs, setInputs] = useState({});

   // get blog details
   const getBlogDetail = async () => {
      try {
         const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
         if (data?.success) {
            setBlog(data?.blogs);
            setInputs({
               title: data.blogs.title,
               description: data?.blogs.description,
               image: data?.blogs.image
            });
            // console.log(data.blog.title)
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      getBlogDetail();
   }, [id]);

   // input change
   const handleChange = (e) => {
      setInputs((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };
   //form
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
            title: inputs.title,
            description: inputs.description,
            image: inputs.image,
            user: id,
         });
         if (data?.success) {
            toast.success("Blog Updated");
            navigate("/my-blog");
         }
      } catch (error) {
         console.log(error);
      }
   };
   console.log(blog);

   return (
      <v>
         <form onSubmit={handleSubmit}>
            <Box
               width={'30%'}
               border={'0px solid grey'}
               borderRadius={10}
               margin="auto"
               padding={2}
               marginTop={'10px'}
               boxShadow={'10px 5px 15px grey'}
               display={'flex'}
               flexDirection={'column'}
            >
               <Typography
                  variant={'h4'}
                  fontWeight={'bold'}
                  textAlign={'center'}
                  padding={1}
                  color={'black'}
               >
                  Update Blog
               </Typography>
               <InputLabel
                  sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
               >
                  Title
               </InputLabel>
               <TextField
                  name="title"
                  value={inputs.title}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
               />
               <InputLabel
                  sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
               >
                  Description
               </InputLabel>
               <TextField
                  name="description"
                  value={inputs.description}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
               />
               <InputLabel
                  sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}
               >
                  Image URL
               </InputLabel>
               <TextField
                  name="image"
                  value={inputs.image}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                  required
               />
               <Button type="submit" color="warning" variant="contained">
                  UPDATE
               </Button>
            </Box>
         </form>
      </v>
   );
};

export default BlogDetail;