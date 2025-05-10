let arr = []

// 유사한 코드를 연속으로 실행할 때 while, for
let num = 0
while(num < 5){
    arr.push(num)
    num += 1 // 값을 1 증가
}

console.log(arr)

// node Day03_6반복.js  

let otherArr = []
for(let 임시 = 0; 임시 < 5; 임시++){
    otherArr.push(임시)
}
console.log(otherArr)

arr = []
for(let 임시 = 1; 임시 <= 5; 임시++){
    arr.push(임시)
}
console.log(arr)

arr = []
for(let 임시 = 0; 임시 < 10; 임시+=2){
    arr.push(임시)
}
console.log(arr)

arr = [] // 2씩 감소하게
for(let 임시 = 10; 임시 > 0; 임시-=2){
    arr.push(임시)
}
console.log(arr)

// for를 통해 배열 안에 들어있는 모든 값을 사용
let total = 0
for(let roomNum = 0; roomNum < arr.length; roomNum++){
    // console.log(arr[roomNum])
    total += arr[roomNum]
}
console.log(total)