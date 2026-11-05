const { after, before, test } = require('node:test');
const assert = require('node:assert/strict');
const createServer = require('./app');

const server = createServer();
let baseUrl;

before(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test('serves the pipeline dashboard', async () => {
  const response = await fetch(baseUrl);

  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  assert.match(await response.text(), /Pipeline overview/);
});

test('returns 404 for unknown routes', async () => {
  const response = await fetch(`${baseUrl}/missing`);

  assert.equal(response.status, 404);
  assert.equal(await response.text(), 'Not found\n');
});
