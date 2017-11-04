console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

console.log('notes', notes);
console.log(notes.addNote());
console.log('Result =', notes.add(9, -2));
// console.log('Result:', notes.sub(9, -2));

let user = os.userInfo();
console.log('user', user);

fs.appendFile('greetings.txt', 'Hello ' + user.username + '! You are ' + notes.age);
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
