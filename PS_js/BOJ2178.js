const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n,m] = input.shift().trim().split(" ").map(i=>+i);
const map = input.map(arr=>arr.trim().split("").map(i=>+i));

class Node {
    constructor(x, y, dist) {
        this.x = x;
        this.y = y;
        this.dist = dist;
    }
}

const dx = [-1,0,1,0];
const dy = [0,1,0,-1]


function bfs() {
    const q = [];
    q.push(new Node(0,0,1));
    map[0][0] = -1;

    while (q.length) {
        let {x,y,dist} = q.shift();
        if (x===n-1 && y === m-1) {
            console.log(dist)
            return;
        }

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (0<=nx&&nx<n && 0<=ny&&ny<m && map[nx][ny] === 1) {
                q.push(new Node(nx, ny, dist + 1))
                map[x][y] = -1;
            }
            
        }
    }
    
}

bfs(0,0);