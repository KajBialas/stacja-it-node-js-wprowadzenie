const fs = require('fs');
const path = require('path');

import { APPLICATION_HEADER_TEMPLATE } from '../partials/header';
import { APPLICATION_FOOTER_TEMPLATE } from '../partials/footer';

import { renderUsers } from '../helpers/renderUsers';

const users = [];

try {
  const data = fs.readFileSync(path.join(__dirname, '/../users.json'), 'utf8');
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

export const responseHomeBody = `
  ${APPLICATION_HEADER_TEMPLATE}
  ${responseBodyUsers}
  ${APPLICATION_FOOTER_TEMPLATE}
`;