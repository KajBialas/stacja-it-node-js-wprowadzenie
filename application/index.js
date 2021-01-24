const http = require('http');
const colors = require('colors');
const fs = require('fs');


import { add } from './helpers/add';
import { sub } from './helpers/sub';
import { renderUsers } from './helpers/renderUsers';
import { APPLICATION_HEADER_TEMPLATE} from './partials/header';
import { APPLICATION_FOOTER_TEMPLATE} from './partials/footer';

const PORT = 8000;

const addResult = add(5,10);
const subResult = sub(10,5);

const users = [];

try {
  const data = fs.readFileSync('./users.json', 'utf8');
  JSON.parse(data).forEach(user => users.push(user));
} catch (err) {
  console.log(err);
}


const responseBodyUsers = `
  <div>
    <h2>Lista userów</h2>
    ${renderUsers(users)}
  </div>
`;

const responseBodyContent = `
  <div>
    Wynikiem działalnia dodawania dla 5 i 10 jest: ${addResult}<br/>
    Wynikiem działania odejmowania dla 10 i 5 jest ${subResult}
  </div>
`;

const responseBody = `
  ${APPLICATION_HEADER_TEMPLATE}
  ${responseBodyContent}
  ${responseBodyUsers}
  ${APPLICATION_FOOTER_TEMPLATE}
`;

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end(responseBody);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Server listening at port ${PORT}`.green);
});



