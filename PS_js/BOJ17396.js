const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [nm, s, ...arr] = input;
const [n, m] = nm
  .trim()
  .split(" ")
  .map((i) => +i);
const sight = s
  .trim()
  .split(" ")
  .map((v) => +v);
sight[sight.length - 1] = 0;
arr = arr.map((item) =>
  item
    .trim()
    .split(" ")
    .map((i) => +i)
);
let graph = Array.from({ length: n }, () => []);

const init = () => {
  for (let i = 0; i < m; i++) {
    let [a, b, c] = arr[i];
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
};

const dijkstra = () => {
  let dist = new Array(n).fill(Infinity);
  let visited = new Array(n).fill(false);
  let pq = [[0, 0]]; //노드, 거리

  while (pq.length) {
    pq.sort((a, b) => a[1] - b[1]);

    let [curNode, curDist] = pq.shift();

    if (visited[curNode]) continue; //이미 방문했으면 패스
    visited[curNode] = true;

    if (curNode === n - 1) {
      return curDist;
    }

    for (let [nextNode, weight] of graph[curNode]) {
      if (sight[nextNode] === 1) continue;

      let nextDist = curDist + weight;
      if (nextDist < dist[nextNode]) {
        pq.push([nextNode, nextDist]);
        dist[nextNode] = nextDist;
      }
    }
  }
  return -1;
};

init();
const result = dijkstra();

console.log(result);