const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=10&sttaus=active');

// serialized url

console.log(myUrl.href);
console.log(myUrl.toString());

//host root domain

console.log(myUrl.host);
//hostname - doesnt include port
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialzied query gets everything after '?'

console.log(myUrl.search);

// params object - gets object

console.log(myUrl.searchParams);

//add param

myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams);

//loop trough params

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));


