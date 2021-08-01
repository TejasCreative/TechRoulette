// This function, basic_hasher(), is the function we're writing together. It's your job to fill it in!

function basic_hasher(input) {
  var hashval = 0;
  for (var i = 0; i < input.length; i++) {
    var unicode = input.charCodeAt(i);
    hashval += unicode;
    if (hashval > Number.MAX_SAFE_INTEGER) {
    hashval = Number.MAX_SAFE_INTEGER;
  }

  return hashval;
}
}

// These are just some examples that you can use to test that your hashing function works! Feel free to replace the input string with whatever you like! The output gets printed when you run the file.
console.log(basic_hasher("boblover1234"));
console.log(basic_hasher("TechRoulette!"));