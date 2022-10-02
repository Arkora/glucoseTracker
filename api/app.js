import express from "express"
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import Cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import metricsController from './routes/metricsRoutes.js'


dotenv.config();
const app = express();

const PORT = 8000;

app.use(Cors())
app.use(bodyParser.json())
app.use("/user",userRouter)
app.use("/metric",metricsController)






app.get('/',(req,res) =>{
    res.send("Api v1.0");
});

mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("DB Connected")
})

app.listen(PORT)