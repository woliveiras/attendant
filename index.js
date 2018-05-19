const http = require('http')
const fs = require('fs')
const port = 8000

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/json',
		'Access-Control-Allow-Origin': '*'
    })

    fs.readFile('db.json', (err, content) => {
        res.write(content);
        res.end();
    });
}).listen(port)

console.log(`Listen on ${ port }`)