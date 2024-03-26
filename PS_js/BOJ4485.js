const { time } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
let problem = 1;

let n;
while ((n = +input[idx++])) {
  solution(n, problem++);
}

function solution(n, problem) {
  let map = Array.from({ length: n }, () => input[idx++].split(" ").map(Number));
  let visited = Array.from({ length: n }, () => new Array(n).fill(Number.MAX_SAFE_INTEGER));

  const q = [];
  q.push([0, 0]);
  visited[0][0] = map[0][0];

  while (q.length) {
    let [x, y] = q.shift();

    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (visited[nx][ny] > visited[x][y] + map[nx][ny]) {
          visited[nx][ny] = visited[x][y] + map[nx][ny];
          q.push([nx, ny]);
        }
      }
    }
  }

  console.log(`Problem ${problem}: ${visited[n - 1][n - 1]}`);
}
