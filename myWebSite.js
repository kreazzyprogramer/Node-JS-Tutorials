const http = require('http');
const fs =require('fs');


const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    
    if (req.url == '/') {
        res.StatusCode = 200;

        res.end('<h1> WAQAR AHMAD HANIFI </> <p> THIS IS MAIN PAGE </>');
    }


    else if (req.url == '/about'){
        res.StatusCode = 200;

        res.end('<h1> ABOUT </br> WAQAR AHMAD HANIFI </> <p> THIS IS ABOUT PAGE </>');
    }
    else if (req.url == '/website'){
        res.StatusCode = 200;
        const data= fs.readFileSync('index.html')


        res.end(data.toString());
    }

    else{
        res.StatusCode = 404;
        res.end('<h1>Error 404 not Found </>');

    }

})

server.listen(port, () => {
    console.log(`listining on post ${port}`);

});