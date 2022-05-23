const fs = require("fs");

let text = fs.readFileSync('text.txt', 'utf-8');
console.log(text);
