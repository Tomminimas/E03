const readline = require("readline-sync");
let n = Number(readline.question('Nhap so nguyen duong:  '));
if (n > 0) {
    a = Math.sqrt(n);
    if (a * a == n){
        console.log('Day la so chinh phuong');
    }
    else {
        console.log('Day ko la so chinh phuong');
    }
}