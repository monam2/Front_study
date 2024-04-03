//백준 2565 전깃줄
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...arr] = input;
n = +n;
arr = arr.map(i=>i.split(" ").map(v=>+v));

let dp = new Array(n).fill(1);

arr.sort((a,b)=> a[0] - b[0]);

for (let i = 0; i < n; i++) {
    let now = arr[i][1];
    let lis = 0;
    for (let j = 0; j < i; j++) {
        let before = arr[j][1];
        if (now > before) {
            lis = Math.max(lis, dp[j]);
        }
    }
    dp[i] = lis + 1;
}

console.log(n - Math.max(...dp));