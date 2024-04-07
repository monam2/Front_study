const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, ...ipt] = input;
n = +n.trim();
ipt = ipt.map(e=>e.trim().split(" ").map(i=>+i));
let graph = new Array(n).fill().map(i => new Array(n).fill(100000000));

// for (let i = 0; i < n ; i++) {
//     graph[i][i] = 0;
// }

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (ipt[i][j] == 1) {
            graph[i][j] = 1;
        }
    }
}

for (let mid = 0; mid < n; mid++) {
    for (let start = 0; start < n; start++) {
        for (let end = 0; end < n; end++) {
            if (graph[start][end] > graph[start][mid] + graph[mid][end]) {
                graph[start][end] = graph[start][mid] + graph[mid][end];
            }
        }
    }
}

let result = new Array(n).fill().map(i => new Array(n).fill(0));
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] != 100000000) {
            result[i][j] = 1;
        }
    }
}

let answer = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        answer += result[i][j] + " ";
    }
    answer += "\n";
}
console.log(answer);