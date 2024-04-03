const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = +input[0];

function fibo(n) {
  let arr = [BigInt(0), BigInt(1)];
  for (let i = 1; i < n; i++) {
    let len = arr.length;
    arr.push(arr[len - 1] + arr[len - 2]);
  }
  return arr[n];
}

console.log(fibo(n).toString());
