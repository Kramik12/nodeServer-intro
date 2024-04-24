const http = require("http");

const app = http.createServer((req, res) => {
    //server block

    console.log("Req.Method: ", req.method);
    console.log("Req.Url: ", req.url);

    if(req.url == "/") {
        //home page
        if(req.method == "GET"){
            res.end("Home page here");
        } else if(req.method == "POST") {
            res.end("Home page post request");
        } else {
            res.end("Unsupported methods");
        }
       
    } else if(req.method == 'GET' && req.url == "/about") {
        //about us page
        res.end("About us page");
    } else if(req.method == 'GET' && req.url == "/contact") {
        //contact  page
        res.end("Contact us page");
    } else if(req.url == '/login') {
         //login logic
         if(req.method == "GET") {
            res.end("Login form");
         } else if(req.method == "POST" ) {
            //login logic
            let resposne = {
                result: {name: "Kramik", email: "kramikkafle7@gmail.com"},
                status: "200",
                msg: "Login Successfull"
            };
            res.end(JSON.stringify(response));
         }
        }
        else {
        res.end("404 not found");
    }

});

app.listen(3001, "localhost", (err) => {
    if(err){
        console.log("Server connection error");
    } else {
        console.log("Server is listening to port: 3001")
        console.log("Press CTRL+C to end server connection")
    }

});


