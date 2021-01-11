let http = require('http');



http.createServer((request, response) => {
        if(request.url === "/contacto"){
            response.setHeader("Content-type", "text/html; charset=utf-8");
            response.write("<h1>Bienvenido a mi página de contacto</h1>");
            response.end();
        }else if(request.url === "/"){
            response.setHeader("Content-type", "text/html; charset=utf-8");
            response.write("<h1>Página de inicio</h1>");
            response.end();
        }else{
            response.setHeader("Content-type", "text/html; charset=utf-8");
            response.write("<h1>404</h1>");
            response.end();
        }
}).listen(8080);