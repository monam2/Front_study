const { time } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");


let [n, str] = input;
n = +n;
const arr = str.split(" ").map(i=>+i);
let dp = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j]+1)
        }
    }
}

let max = 0;
dp.forEach(i=>{
    if (i>max) {
        max = i;
    }
})
console.log(max);