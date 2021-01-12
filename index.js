let http = require('http');
let fs = require("fs");


http.createServer((request, response) => {
    response.setHeader("Content-type", "text/html; charset=utf-8");
    switch(request.url){
        case "/":
            readFile("./index.html", response);
            break;
        case "/nosotros":
            readFile("./about.html", response);
            break;
        case "/proyectos":
            readFile("./projects.html", response);
            break;
        case "/contacto":
            readFile("./contact.html", response);
            break;
        case "favicon.ico":
            readFile("./favicon.ico", response);
            break;
        default:
            response.statusCode= 404;
            readFile("./404.html", response);
            break;
    }

}).listen(8080);


const readFile = (path, response) => {
    fs.readFile(path, (error, content) =>{
        if(!error){
            response.write(content);
            response.end();
        }
    })
}