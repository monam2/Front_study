const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input
  .shift()
  .trim()
  .split(" ")
  .map((i) => +i);

let coins = input.map((item) => +item);

let dp = new Array(k + 1).fill(0);
dp[0] = 1;

for (let coin of coins) {
  for (let j = coin; j < k + 1; j++) {
    dp[j] += dp[j - coin];
  }
}

console.log(dp[k]);
