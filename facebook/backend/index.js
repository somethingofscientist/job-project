const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();

mongoose.connect(process.env.uri)
.then(()=> console.log('Connected...'))


app.listen(process.env.port, ()=> {
   console.log(`Server ${process.env.port}`)
})