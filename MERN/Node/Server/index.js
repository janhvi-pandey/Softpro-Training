var http = require("http");
var fs = require("fs");
var url = require("url");
var tempserver = http.createServer((req, res) => {

  var log = `${Date.now()}:Req recieved on ${req.url}\n`;
  var myUrl=url.parse(req.url,true);//true to get thw query in object form
  console.log(myUrl.query.name); 
  fs.appendFile('log.txt', log, (err) => {
    switch (req.url) {
      case '/':
        res.end("Home Page");
        break;
        case '/about':
            res.end("About Page");
            break;
            case '/profile':
                res.end("Profile Page");
                
                break;
            case '/reg':
              if(req.method=='GET'){
                res.end("Registration Page");
                 }
              else if(req.method=='POST'){
                res.end("FORM Submit");
                
              }  
              break;  
      default:
        res.end("404 Not found");
        break;
    }
  });
});
tempserver.listen(8000, () => console.log("Running"));
