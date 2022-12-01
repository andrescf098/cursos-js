const user = { username: 'gndx', age: 34, country: 'MX', clima: 'frio' };
const { username, age,...values } = user;
console.log(username);
console.log(values)