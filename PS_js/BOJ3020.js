//백준 3020 개똥벌레
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [temp, ...ipts] = input;
let [n, h] = temp.trim().split(" ").map(i=>+i);
let ipt = ipts.map(i=>+i.trim());

let sukPreFixSum = new Array(h).fill(0);
let jongPreFixSum = new Array(h).fill(0);
ipt.forEach((v,i) => {
    if (i%2==0) {
        sukPreFixSum[v - 1] += 1;
    } else {
        jongPreFixSum[h - v] += 1;
    }
});


let before = sukPreFixSum[h-1];
for (let i = h-2; i > -1; i--) {
    sukPreFixSum[i] += before;
    before = sukPreFixSum[i];
}
before = jongPreFixSum[h-1];
for (let i = h-2; i > -1; i--) {
    jongPreFixSum[i] += before;
    before = jongPreFixSum[i];
}
jongPreFixSum = jongPreFixSum.reverse();

let result = [];
for (let i = 0; i < h; i++) {
    result.push(jongPreFixSum[i]+sukPreFixSum[i]);    
}

let min = Math.min(...result);
let sum = 0;
for (let i of result) {
    if (i===min) sum++;
}

console.log(min, sum);