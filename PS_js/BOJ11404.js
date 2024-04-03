const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, ...ipt] = input;
n = +n, m = +m;
ipt = ipt.map(e=>e.trim().split(" ").map(i=>+i));

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
for (let i = 0; i < n+1; i++) {
    graph[i][i] = 0;
}
for (let i = 0; i < m; i++) {
    let [start, end, cost] = ipt[i];
    graph[start][end] = Math.min(graph[start][end], cost);
}

for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (graph[i][k] + graph[k][j] < graph[i][j]) {
                graph[i][j] = graph[i][k] + graph[k][j];
            }
        }
    }
}

for (let i = 1; i < n+1; i++) {
    let result = "";
    for (let j = 1; j < n+1; j++) {
        result += graph[i][j]==Infinity ? '0 ' : graph[i][j]+" ";
    }
    console.log(result);
}