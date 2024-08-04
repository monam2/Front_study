//BOJ 14602 소금과 후추 small

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, k, w] = input.shift().trim().split(" ").map(i => +i);
const map = input.map(arr => arr.trim().split(" ").map(i => +i));
const newMap = Array.from({ length: n - w + 1 }, () => Array.from({ length: m - w + 1 }).fill(0));

for (let i = 0; i < n - w + 1; i++) {
  for (let j = 0; j < m - w + 1; j++) {
    const tempArr = [];
    for (let x = i; x < i + w; x++) {
      for (let y = j; y < j + w; y++) {
        tempArr.push(map[x][y]);
      }
    }

    tempArr.sort((a, b) => a - b);
    const med = tempArr[Math.floor(tempArr.length / 2)];
    newMap[i][j] = med;
  }
}

let str = "";
for (let i = 0; i < newMap.length; i++) {
  for (let j = 0; j < newMap[i].length; j++) {
    str += newMap[i][j] + " ";
  }
  str += "\n";
}
console.log(str)