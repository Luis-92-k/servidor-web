let http = require('http');
let fs = require("fs");


http.createServer((request, response) => {
    response.setHeader("Content-type", "text/html; charset=utf-8");
        if(request.url === "/contacto"){
            fs.readFile("./contact.html", (error, content) => {
                if(!error){
                    response.write(content);
                    response.end();
                }else{
                    response.write("<h1>404</h1>");
                    response.end();
                }
            });
            
        }else if(request.url === "/"){
            response.write("<h1>Página de inicio</h1>");
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
}).listen(8080);