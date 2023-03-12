import React, { useState } from 'react'
import { Box, InputLabel, Button, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const CreateBlogs = () => {

  const navigate = useNavigate();
  const id = localStorage.getItem('userId')
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: ""
  })

  // handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // form 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/blog/create-blog', {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      })
      if (data?.success) {
        alert('Blog Created');
        navigate('/my-blog');
      }
    }
    catch (error) {
      console.log(error.message)
    }
    console.log(inputs);
  }

  return (
    <>
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
          > Create post </Typography>

          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: 'bold' }}
          >
            Title
          </InputLabel>
          <TextField
            name='title'
            value={inputs.title}
            onChange={handleChange}
            margin='normal'
            variant='outlined'
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: 'bold' }}
          >
            Description
          </InputLabel>
          <TextField
            name='description'
            value={inputs.description}
            onChange={handleChange}
            margin='normal'
            variant='outlined'
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: 'bold' }}
          >
            Image URL
          </InputLabel>
          <TextField
            name='image'
            value={inputs.image}
            onChange={handleChange}
            margin='normal'
            variant='outlined'
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onChange={handleSubmit}  >Submit </Button>
        </Box>
      </form>
    </>
  )
}
