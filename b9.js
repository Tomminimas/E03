const readline = require("readline-sync");
let m = Number(readline.question('Nhap chieu dai:  '));
let n = Number(readline.question('Nhap chieu rong:  '));
for (i = 0; i < n ; i++) {
    let line = '';
    for (j = 0; j < m; j++) {
        if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
            line += '* ';
        }
        else {
            line += '  ';
        }
    }
    console.log(line);
}