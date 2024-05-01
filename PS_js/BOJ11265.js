const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let [num, ...other] = input;
let [n, m] = num.trim().split(" ").map(i=>+i);


let partyPlace = [];
for (let i = 0; i < n; i++) {
    let temp = other.shift().trim().split(" ").map(i=>+i);
    partyPlace.push(temp);
}

let plan = other.map(i=>i.trim().split(" ").map(v=>+v));

for (let mid = 0; mid < n; mid++) {
    for (let start = 0; start < n; start++) {
        for (let end = 0; end < n; end++) {
            if (partyPlace[start][end] > partyPlace[start][mid] + partyPlace[mid][end] && start != end) {
                partyPlace[start][end] = partyPlace[start][mid] + partyPlace[mid][end];
            }
        }
    }
}

plan.forEach(pl => {
    let [a, b, limit] = pl;
    if (partyPlace[a-1][b-1] > limit) {
        console.log("Stay here");
    } else {
        console.log("Enjoy other party")
    }
});