import React, { useState } from 'react'
import { Box, InputLabel, AppBar, Toolbar, Button, Typography, Tabs, Tab, TextField } from '@mui/material';

export const CreateBlogs = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: ""
  })

  // form 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={'50%'}
          border={'0px solid grey'}
          borderRadius={10}
          margin="auto"
          padding={1}
          marginTop={'10px'}
          boxShadow={'10px 5px 15px grey'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Typography
            variant={'h4'}
            fontWeight={'bold'}
            textAlign={'center'}
            padding={3}
            color={'black'}
          > Create post </Typography>

          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: 'bold' }}
          >
            Title
          </InputLabel>
          <TextField margin='normal' variant='outlined'  /> 

        </Box>
      </form>
    </>
  )
}
