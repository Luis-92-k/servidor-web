let http = require('http');
let morgan = require('morgan');

let logger = morgan('tiny');


http.createServer((request, response) => {
    logger(request, response, (err) => {
        if (err) return done (err)

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

        
    });
}).listen(8080);