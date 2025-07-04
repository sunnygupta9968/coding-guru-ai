const express=require("express");
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));
const aiRoutes=require('./routes/ai.routes');

app.get('/',(req,res)=>{
    console.log(process.env.GOOGLE_GEMINI_KEY);
    res.send(process.env.GOOGLE_GEMINI_KEY);
})

app.use('/ai',aiRoutes);


module.exports=app