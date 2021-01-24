const http = require('http');
const colors = require('colors');
const dateFns = require('date-fns');


const PORT = 8000;

const add = (a, b) => b ? a + b : a;

const responseBody = `<div>Aplikacja NodeJS</div><div>Aplikacja działa na porcie: ${PORT}</div><div>Wynikiem dodawania liczb 5 i 6 jest: ${add(5,6)}</div><footer>Copyright ${dateFns.format(new Date(), 'yyyy-MM-dd')}</footer>`;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end(responseBody);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening at port ${PORT}`.green);
});



