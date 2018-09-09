// // var obj = {
// //   name: 'Abhi'
// // };
// // var strObj = JSON .stringify(obj);
// // console.log(typeof strObj);
// // console.log(strObj);
//
// var personString = '{"name": "Venom", "age": 23}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Anti-Hero',
  body: 'Monster'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
//note
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
