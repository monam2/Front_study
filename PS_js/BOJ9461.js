const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let T = +input.shift().trim();
let arr = input.map((e) => +e.trim());

function pado(n) {
  let dp = [0, 1, 1, 1];
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }
  return dp[n];
}

for (let n of arr) {
  console.log(pado(n));
}
