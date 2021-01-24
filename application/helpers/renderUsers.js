export const renderUsers = (users) => {
  let output = '';
   users.map(user => {
     output +=`<div>${user.username}</div>`;
   });
   return output;
}