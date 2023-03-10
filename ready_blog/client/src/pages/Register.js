import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab, TextField } from '@mui/material';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  })

  // handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // form submit handle function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/user/register',
        {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        });

      if (data.success) {
        alert('User Registered Successfully');
        navigate('/login');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          {/* register heading */}
          <Typography
            variant="h4"
            padding={3}
            textAlign={"center"}
            sx={{ textTransform: "uppercase" }}
          >
            Register
          </Typography>

          {/* input fields */}
          <TextField
            placeholder='name'
            name='name'
            margin='normal'
            type={"text"}
            value={inputs.name}
            onChange={handleChange}
            required
          />
          <TextField
            placeholder='email'
            name='email'
            margin='normal'
            value={inputs.email}
            onChange={handleChange}
            type={"email"}
            required
          />
          <TextField
            placeholder='password'
            name='password'
            margin='normal'
            value={inputs.password}
            onChange={handleChange}
            type={"password"}
            required
          />

          {/* buttons */}

          <Button
            type={"submit"}
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Register</Button>
          <Button
            type={"submit"}
            sx={{ borderRadius: 3, marginTop: 3 }}
            onClick={() => navigate('/login')}
          >
            Already Registered ? Please Login</Button>
        </Box>
      </form>
    </>
  )
}

export default Register