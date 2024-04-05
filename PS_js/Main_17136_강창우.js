const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let map = [];
let paper = [0, 5, 5, 5, 5, 5];
let answer;

init();
dfs(0, 0, 0);
print();

function init() {
  input.forEach((e) => {
    map.push(
      e
        .trim()
        .split(" ")
        .map((i) => +i)
    );
  });

  answer = 100;
} //init

function print() {
  if (answer === 100) {
    console.log(-1);
  } else {
    console.log(answer);
  }
} //print

function dfs(x, y, cnt) {
  if (x >= 9 && y > 9) {
    if (cnt < answer) {
      answer = cnt;
    }
    return;
  }

  if (y > 9) {
    dfs(x + 1, 0, cnt);
    return;
  }

  if (answer <= cnt) {
    return;
  }

  if (map[x][y] === 1) {
    for (let i = 5; i >= 1; i--) {
      if (paper[i] > 0 && check(x, y, i)) {
        paper[i]--;
        attachPaper(x, y, i, 0);
        dfs(x, y + 1, cnt + 1);
        attachPaper(x, y, i, 1);
        paper[i]++;
      }
    }
  } else {
    dfs(x, y + 1, cnt);
  }
} //dfs

function check(x, y, n) {
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (i < 0 || i >= 10 || j < 0 || j >= 10 || map[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
} //check

function attachPaper(x, y, n, k) {
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      map[i][j] = k;
    }
  }
} //attachPaper
