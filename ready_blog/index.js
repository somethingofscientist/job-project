const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connection = require('./config/db.js')
dotenv.config();
const port = process.env.port || 4001;
const userRoutes = require('./routes/userRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');

connection ();


app.use(express.json())

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);


app.listen(port, () => {
   console.log(`Listening at ${port}`)
})

