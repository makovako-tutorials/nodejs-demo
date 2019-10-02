const path = require('path');

// Basefile name

console.log(__filename);
console.log(path.basename(__filename));

// Directory name

console.log(path.dirname(__filename));


// File extension

console.log(path.extname(__filename));

// create path object

console.log(path.parse(__filename));

// Concatenate paths, crates file test/hello.html

console.log(path.join(__dirname, 'test', 'hello.html'));


