const http = require('http');
const colors = require('colors');
const fs = require('fs');
const mysql = require('mysql');


const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: 8889,
  password: 'root',
  database: 'job',
});

con.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log('DB connected');
});

con.query('SELECT * FROM authors', (error, rows) => {
  if (error) {
    console.log(error, '');
    return;
  }
  rows.forEach(row => {
    console.log(row.name);
  });
});



import { responseHomeBody } from './routes/home';
import { responseAboutBody } from './routes/about';
import { response404Body } from './routes/page404';
import { sortedArray } from './fileSystem';

const PORT = 8000;


const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  console.log(request.url)
  switch (request.url) {
    case '/': response.end(responseHomeBody); break;
    case '/about': response.end(responseAboutBody); break;
    case '/contact':
      fs.readFile('./static/contact.html', (err, page) => {
        if (err) {
          console.log(err);
        }
        response.end(page);
      });
      break;
    case '/api/users':
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.end(JSON.stringify(sortedArray));
    default: response.end(response404Body);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening at port ${PORT}`.green);
});



