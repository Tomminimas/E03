const readline = require("readline-sync");
let m = 2;
let n = 4;
result = 0;
for (i = m; i <= n; i++) {
    if (parseInt(Math.sqrt(i)) == Math.sqrt(i)) {
        result = i;
        break;
    }
}
console.log('So chinh phuong dau tien la: ', result); 