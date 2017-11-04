console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
  console.log('add a note');
} else if (command === 'list') {
  console.log('list all notes');
} else if (command === 'get') {
  console.log('get a note');
} else if (command === 'delete') {
  console.log('delete a note');
} else if (command === 'update') {
  console.log('update a note');
} else {
  console.log('command not found');
}