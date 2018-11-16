//import opn from 'opn';
import path from "path";
//import https from 'https';
import http from 'http';
import fs from 'fs';
import net from "net";
import spdy from "spdy";
module.exports = app => {
    const port = app.get("port");
    const httpsOptions = {
        key: fs.readFileSync(path.join(__dirname, '../server.key')),
        cert: fs.readFileSync(path.join(__dirname, '../server.crt'))
    }
    const baseAddress = port;
    const redirectAddress = 3001;
    const httpsAddress = 443;


    net.createServer(tcpConnection).listen(baseAddress);
    http.createServer(httpConnection).listen(redirectAddress);
    // https.createServer(httpsOptions, httpsConnection).listen(httpsAddress);
    spdy.createServer(httpsOptions, app).listen(httpsAddress, (error) => {
        if (error) {
          console.error(error)
          return process.exit(1)
        } else {
          console.log('Listening on port: ' + port + '.')
        }
      })
    function tcpConnection(conn) {
        conn.once('data', function (buf) {
            // A TLS handshake record starts with byte 22.
            var address = (buf[0] === 22) ? httpsAddress : redirectAddress;
            var proxy = net.createConnection(address, function () {
                proxy.write(buf);
                conn.pipe(proxy).pipe(conn);
            });
        });
    }

    function httpConnection(req, res) {
        var host = req.headers['host'];
        res.writeHead(301, { "Location": "https://" + host + req.url });
        res.end();
    }
}