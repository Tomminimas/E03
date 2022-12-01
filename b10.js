const readline = require("readline-sync");
let h = 5;

for (i = 0; i < h ; i++) {
    let line = '';
    for (j = 0; j <= i; j++) {
        if (j == i || j == 0 || i == h - 1) 
            line += '* ';
        else {
            line += '  ';
        }
    }
    console.log(line);
}