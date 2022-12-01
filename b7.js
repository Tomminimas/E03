const readline = require("readline-sync");
let n = Number(readline.question('Nhap so nguyen duong:  '));
tongCacUoc = 0;
for (i = 1 ; i <= n ; i++) {
    if (n % i == 0) {
        tongCacUoc += i;
    }
}
if (n == tongCacUoc) {
    console.log('So ban nhap la so hoan thien',n);
}
else { 
    console.log('So ban nhap ko la so hoan thien',n);
}