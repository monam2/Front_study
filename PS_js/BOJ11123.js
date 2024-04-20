const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input.shift().trim()
let H,W,cnt;
let map;
let visited;
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

const bfs=(x,y)=>{
    let q = [];
    q.push([x,y]);
    visited[x][y] = true;

    while (q.length) {
        [x, y] = q.shift();

        for (let d = 0; d < 4; d++) {
            let nx = x + dx[d];
            let ny = y + dy[d];
            
            if (0<=nx&&nx<H && 0<=ny&&ny<W && !visited[nx][ny] && map[nx][ny] === '#') {
                q.push([nx,ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

for (let i = 0; i < n; i++) {
    map = [];
    cnt = 0;
    [H, W] = input.shift().trim().split(" ").map(i=>+i);
    for (let h = 0; h < H; h++) {
        let row = input.shift().trim().split("");
        map.push(row);
    }

    visited = new Array(H).fill().map(i=>new Array(W).fill(false));

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            if (map[i][j]==='#' && !visited[i][j]){
                cnt++;
                bfs(i,j);
            }
        }
    }

    console.log(cnt);
}

