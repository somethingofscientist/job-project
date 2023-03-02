
import express, { Router } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/route.js'
import { connection } from './db.js';
const app = express();
dotenv.config()
const port = process.env.port || 4001;
app.use(cors());

// database
connection();

app.get('/', (req, res) => {
   res.send('hello world');
})

// middlewares
app.use(express.json())

// routes
app.use('/auth', authRoutes);

app.listen(port, ()=> {
   console.log(`Listening at ${port}`)
})