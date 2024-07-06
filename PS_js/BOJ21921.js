const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, x] = input.shift().trim().split(" ").map(i => +i)
const arr = input.shift().trim().split(" ").map(i => +i);

function solution() {
    if (arr.reduce(((acc, cur) => acc + cur), 0) == 0) {
        console.log("SAD")
        return
    }

    let window = arr.slice(0, x+1);
    let maxVisitor = window.reduce(((acc,cur)=>acc+cur),0);

    for (let i = 0; i < n-x; i++) {
        let newWindow = arr.slice(i, x+1+i);
        let tempVisitor = newWindow.reduce(((acc, cur)=>acc+cur), 0);
        
        maxVisitor = Math.max(maxVisitor, tempVisitor);
    }

    let cnt = arr.filter(i=>i===maxVisitor).length
    console.log(maxVisitor);
    console.log(cnt);
    return;
}

solution();