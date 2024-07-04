const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [r,c,t] = input.shift().trim().split(" ").map(i=>+i);
let ipt = input.map(i=>i.trim().split(""))


