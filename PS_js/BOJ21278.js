//백준 21278 호석이 두 마리 치킨

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [nm, ...arr] = input;
let [n, m] = nm
  .trim()
  .split(" ")
  .map((e) => +e);
arr = arr.map((e) =>
  e
    .trim()
    .split(" ")
    .map((i) => +i)
);

let graph = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(Infinity));
for (let i = 1; i < n + 1; i++) {
  graph[i][i] = 0;
}

for (let i = 0; i < m; i++) {
  let [a, b] = arr[i];
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let mid = 1; mid < n + 1; mid++) {
  for (let start = 1; start < n + 1; start++) {
    for (let end = 1; end < n + 1; end++) {
      if (graph[start][end] > graph[start][mid] + graph[mid][end] && start !== end) {
        graph[start][end] = graph[start][mid] + graph[mid][end];
      }
    }
  }
}

let min = Infinity;
let p1 = Infinity;
let p2 = Infinity;
for (let start = 1; start < n + 1; start++) {
  for (let end = 1; end < n + 1; end++) {
    let dist = 0;
    for (let hos = 1; hos < n + 1; hos++) {
      dist += Math.min(graph[start][hos], graph[end][hos]);
    }
    if (min > dist) {
      p1 = start;
      p2 = end;
      min = dist;
    }
  }
}

console.log(`${p1} ${p2} ${min * 2}`);
