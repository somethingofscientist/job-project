import express from "express";
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from "morgan";
import { connect } from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';

// configure dotenv 
dotenv.config();

// database config
connect();

const app = express();
const port = process.env.PORT || 4001 ;


// middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


// routes
app.use('/api/v1/auth', authRoutes)


app.get('/', (req, res) => {
   res.send( "<h1> Hello World </h1>" );
})

app.listen(port, () => {
   console.log(`Server is running in ${process.env.DEV_MODE} at ${port}`.bgCyan.white)
})