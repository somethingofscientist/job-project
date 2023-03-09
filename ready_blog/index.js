const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connection = require('./config/db.js')
dotenv.config();
const port = process.env.port || 4001;
connection ();
const userRoutes = require('./routes/userRoutes.js')
app.use(express.json())

app.use('/api/v1/user', userRoutes);


app.listen(port, () => {
   console.log(`Listening at ${port}`)
})

