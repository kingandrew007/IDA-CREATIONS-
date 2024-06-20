import express from 'express';
import cors from 'cors';
import dbconnection from './config/db.js';
import contactRoute from './routes/contactRoute.js';
const port = 8000;
const app = express();
app.use(cors());
app.use(express.json());


app.use(contactRoute);
dbconnection();


app.listen(port,()=>{
    console.log(`running on port number ${port}`);
});