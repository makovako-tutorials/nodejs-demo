const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname,'/test'), {options}, function(err) {
//     if (err) throw err;
//     console.log('folder created');
// });

// create directory

fs.mkdir(path.join(__dirname, "/test"), {}, err => {
    if (err) throw err;
    console.log('folder created...');
});

// create and wire file, overwrite

fs.writeFile(path.join(__dirname, "/test", 'hello.txt'), 'hello world', err => {
    if (err) throw err;
    console.log('file writen to...');
    
    // append to file, this is asynchrnous can do this that way

    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'i love nodejs', err => {
        if (err) throw err;
        console.log('file apended to..');
    })
});


fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// rename file
fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloworld.txt'),
    err => {
        if(err) throw err;
        console.log('file renamed...');
    }
);