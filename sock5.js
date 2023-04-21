const net = require('net');

// const proxyConfig = {
  // proxy: {
    // ipaddress: '127.0.0.1',
    // port: 1080,
    // type: 5
  // },
  // target: {
    // host: 'example.com',
    // port: 80
  // }
// };

const proxyServer = net.createServer((socks)=>{
   socket	
});


proxyServer.listen(proxyConfig.proxy.port, proxyConfig.proxy.ipaddress, () => {
  console.log(`SOCKS proxy server is running on ${proxyConfig.proxy.ipaddress}:${proxyConfig.proxy.port}`);
});
