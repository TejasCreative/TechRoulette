// This function, my_hash(), is where you should write your hash function. Like last module, input is a string, and the hash function should return an integer.

function my_hash(input) {


  var hashval = 0;
  for (var i = 0; i < input.length; i++) {
    var unicode = input.charCodeAt(i);
    hashval += unicode + 100;
    if (hashval > Number.MAX_SAFE_INTEGER) {
      hashval = hashval/2;
      hashval = hashval*3;
      if (hashval > Number.MAX_SAFE_INTEGER)
      {
        hashval = Number.MAX_SAFE_INTEGER;
      }
  }

  return hashval;
}
}
	


// An example test case!
console.log(my_hash("boblover1234"));

// This is for the collision tester, and can be ignored (it passes your function onto the collision tester to test)

module.exports = {my_hash};
