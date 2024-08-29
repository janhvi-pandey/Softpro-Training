const express = require("express");
const app = express();
const port = 5001;
const mongoose = require("mongoose");

const cors=require('cors');
const EmpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});
mongoose
  .connect("mongodb://127.0.0.1:27017/humaradb")
  .then(() => {
    console.log("Connection done");
  })
  .catch((err) => {
    console.log("Error Found", err);
  });
const Emp = mongoose.model("Emp", EmpSchema);

app.use(express.json()); //middleware
app.use(cors());
//Routes
app.post("/", async(req, res) => {
  console.log(req.body.name); 
  // here emp is collection name
  const response = await Emp.create({  
   
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary,
  });
  return res.send({ msg:"Success" });
});


app.get('/',async(req,res)=>{
    const result= await Emp.find();
   
   return res.send(result);

})
app.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const result= await Emp.findById(id);
    return res.send(result);

})
app.patch('/:id',async(req,res)=>{
    const id=req.params.id;
    const result= await Emp.findByIdAndUpdate(id,req.body);
    return res.send({msg:"Sucess"});
})
app.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const result= await Emp.findByIdAndDelete(id);
    return res.send({msg:"Sucess"});
})
app.listen(5001, () => {
  console.log("Server Running on 5001");
});
