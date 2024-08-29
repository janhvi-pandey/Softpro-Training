const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
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
const user = mongoose.model("user", userSchema);

app.use(express.json()); //middleware

//Routes
app.post("/", async(req, res) => {
  console.log(req.body.name);
  const response = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  return res.send({ msg: "Success" });
});


app.get('/',async(req,res)=>{
    const result= await user.find();
   
   return res.send(result);

})
app.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const result= await user.findById(id);
    return res.send(result);

})
app.patch('/:id',async(req,res)=>{
    const id=req.params.id;
    const result= await user.findByIdAndUpdate(id,req.body);
    return res.send({msg:"Sucess"});
})
app.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    const result= await user.findByIdAndDelete(id);
    return res.send({msg:"Sucess"});
})
app.listen(5000, () => {
  console.log("Server Running on 5000");
});
