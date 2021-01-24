const fs = require('fs');
const _ = require('lodash');


const users = [];

try {
  const data = fs.readFileSync('./users.json', 'utf8');
  JSON.parse(data).map(user => users.push({id: user.id, name: user.name}));
} catch (err) {
  console.log(err);
}

export const sortedArray = _.sortBy(users, ['name']);

fs.writeFile('sortedUsers.json', JSON.stringify(sortedArray), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  return;
});