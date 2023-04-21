const express = require('express');
const http = require('http');
const fs = require('fs');
const dns = require('dns')

const app = express();



app.use('/', (req, res) => {
  const options = {
    hostname: 'example.com',
    port: 443,
    path: req.url,
    method: req.method,
    headers: req.headers,
    data:req.body
  };
  console.log(req.method)
  console.log(req.headers)
  console.log(req.body)
  console.log(req.socket.remoteAddress)

  // const proxyReq = https.request(options, (proxyRes) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');

    // proxyRes.pipe(res, {
      // end: true
    // });
  // });

  // req.pipe(proxyReq, {
    // end: true
  // });
});

const httpsServer = http.createServer(app);

httpsServer.listen(1234, () => {
  console.log('Proxy server running on https://localhost:443');
});
