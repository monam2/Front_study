function getName(name) {
  return new Promise((res,rej)=>{
    setTimeout(() => {
        // res(name);
        rej(new Error("에러 발생"));
    }, 1000);
  })
}

async function showName() {
    // const result = await getName("Mike");
    // console.log(result);

    await getName("Mike").then((res)=>{
        console.log(res);
    }).catch((rej)=>{
        console.log(rej);
    }).finally(()=>{
        console.log("실행 종료");
    })
}

console.log("시작");
showName();