var http=require("http");
var a=http.createServer((req,res)=>{
    res.end("Hello World!");
    console.log("Running");
});
a.listen(7000);