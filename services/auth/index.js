const http = require('http');

const server = http.createServer((req, res) => {
  res.write('OK\n');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on 3000');
});