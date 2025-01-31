import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
//routers
import jobRouter from './routes/jobRouter.js';


dotenv.config();
const app = express();

if(process.env.NODE_ENV !== 'development'){
app.use(morgan('dev'));
}

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello world')
});

app.post('/',(req,res)=>{
    console.log(req);
    res.json({message : "Data received" , data : req.body });
})

app.use('/api/v1/jobs',jobRouter);


app.use('*',(req,res)=>{
    res.status(404).json({message:"Route does not exist"});
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"Something went wrong"});
})
const port = process.env.PORT || 5100;

try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected'

    );
}catch(error){
    console.log(error);
}

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})