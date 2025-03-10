const http = require('http');
const fs =require('fs');
const path = require('path');
http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url=='/'){

        fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
            if (err) throw err;

            res.writeHead(200,{'Content-Type':'text/html'})
            
            res.end(content);

        })
    }
    else if(req.url=='/api'){

        fs.readFile(path.join(__dirname,'public','db.json'),(err,content)=>{
            if (err) throw err;

            res.writeHead(200,{'Content-Type':'application/json'})
            
            res.end(content);

        })
    }
    else{
        res.write("Nothing changed");
    }
    
}).listen(2912, ()=> console.log('server running'));