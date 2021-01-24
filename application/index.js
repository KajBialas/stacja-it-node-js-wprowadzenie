const http = require('http');
const colors = require('colors');
import { responseHomeBody } from './routes/home';
import { responseAboutBody } from './routes/about';
import { response404Body } from './routes/page404';
const PORT = 8000;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  switch (request.url) {
    case '/': response.end(responseHomeBody); break;
    case '/about': response.end(responseAboutBody); break;
    default: response.end(response404Body);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening at port ${PORT}`.green);
});



