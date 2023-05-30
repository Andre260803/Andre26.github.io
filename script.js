const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const radius = queryObject.radius;

    if (radius === undefined){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/plain');
        res.end('error: Please provide a radius parameter in your query string.\n');
    } else {
        const area = Math.PI * radius ** 2;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html>
                    <head>
                        <title>TUGAS NODE.JS</title>
                    </head>
                    <body>
                        <h1>TUGAS NODE.JS</h1>
                        <p>Nama: <span id="nama">Andre Karamoy</span></p>
                        <p>NIM: <span id="nim">210211060158</span></p>
                        <p>The area of a circle with radius ${radius} is ${area}
                        <script src="script.js"></script>
                    </body>
                </html>`);
    }
});

server.listen(3690, () => {
    console.log('Server running at http://localhost:3690/?radius=6');
});
