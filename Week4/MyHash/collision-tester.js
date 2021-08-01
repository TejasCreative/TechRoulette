// This is a basic collision tester that can make checking for collisions a little easier! To use it, enter each key (in this case, a word) you want to check into the test-words.txt file, with each key in a different line. Then, run collision-tester.js, and the program will tell you how many collisions it detected between the word you've inserted.

var oldlog = console.log
console.log = function() {}

const fs = require('fs');
const usr = require("./index.js");

console.log = oldlog

fs.readFile('test-words.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  var collisions = 0;
  
  const words = data.split('\n');
  const hashes = new Set();
  words.forEach( word => {
    var hash = usr.my_hash(word);
    hashes.add(hash);
  });

  collisions = words.length - hashes.size;
  console.log("Number of Collisions Detected: "+collisions);
});