const http = require("http");
const fs = require('fs');
const url = require('url');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '200141Nm',
    database: 'xscj'
});


http.createServer((req, res) => {
    let pathname = "." + url.parse(req.url).pathname;

    if (pathname === "./dist/data") {
        connection.connect();
        connection.query('SELECT * from xs', function (error, results, fields) {
            if (error) throw error;
            fields.forEach((item) => {
                if (item.name === '备注') console.log(item);
            });
            console.log('The solution is: ', results[0]);
        });
        connection.destroy();
    }

    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200);
            res.write(data);
        }
        res.end();
    });
}).listen(8060, "localhost", () => {
    console.log("开始监听...");
});