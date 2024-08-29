const express=require('express');
const app=express();
const port= 8000;
app.get('/',(req,res)=>{
    res.end("Home");
});
app.get('/about',(req,res)=>{
    res.end("About");
});
app.get('/profile',(req,res)=>{
    res.end("Profile");
});

app.listen(8000);