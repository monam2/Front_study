const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = input[0]
  .trim()
  .split(" ")
  .map((e) => +e);
