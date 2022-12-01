const readline = require("readline-sync");
let n = Number(readline.question('Nhap so nguyen duong:  '));
let dem = 0;
for (i = 1 ; i <= n ; i++) {
    if (n % i == 0 ) 
        dem++;
}
console.log('So uoc la',dem);