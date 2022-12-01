const readline = require("readline-sync");
let n = Number(readline.question('Nhap so lan:  '));;
for (let i = 1 ; i <= n; i++) {
    let a = 'Kmin ' + i;
    console.log(a);
}