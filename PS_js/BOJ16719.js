const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");


const string = input[0].trim().split("");
const visited =  Array(string.length).fill("");

function findMin(str, start) {
    if (!str.length) {
        return;
    }

    //사전순으로 가장 작은 글자를 찾아서
    //그 글자에서 양쪽으로 DFS
    const copyString = str.slice();
    const minChar = copyString.sort()[0];
    const minIdx = str.indexOf(minChar);
    visited[start+minIdx] = minChar;

    console.log(visited.join(""));
    findMin(str.slice(minIdx+1), start + minIdx + 1);
    findMin(str.slice(0,minIdx), start);
}

findMin(string, 0);




