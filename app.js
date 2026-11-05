const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const dashboard = fs.readFileSync(
  path.join(__dirname, 'public', 'index.html'),
  'utf8'
);

function createServer() {
  return http.createServer((request, response) => {
    if (request.method !== 'GET' || !['/', '/index.html'].includes(request.url)) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found\n');
      return;
    }

    response.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store'
    });
    response.end(dashboard);
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  createServer().listen(port, () => {
    console.log(`Dashboard running at http://localhost:${port}`);
  });
}

module.exports = createServer;
