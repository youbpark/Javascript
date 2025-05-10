// 상황에 따라 다른 결과를 주어야할 때 조건문 사용
// if(){}

function trueOrfalse(임시){
    if(임시){
        return "true"
    }
    return "false"
}

console.log(trueOrfalse(true))
console.log(trueOrfalse(false))

// 비교연산자 ===, !==, > , <
function correct(num){
    if(num === 10){
        return "같다"
    }
    return "다르다"
}
console.log(correct(10))
console.log(correct(5))

function big(num1, num2){
    // 왼쪽이 클때는 크다는 결과 
    // 왼쪽이 작을땐 작다
    if(num1 > num2){
        return "크다"
    }
    return "작다"
}
console.log(big(100,5))

// node Day03_5조건.js  

function small(num3){
    // 100보다 작은면 100보다 작다
    // 1000보다 작으면 1000보다 작다
    if(num3 < 100){
        return "100보다 작다"
    }
    if(num3 < 1000){
        "1000보다 작다"
    }
    return "1000이상이다"
}
console.log(small(105))

function 두가지이상(임시){
    if(임시 < 10 || 임시 >100){
        return "10보다 작거나 100보다 크다"
    }
    if(임시 > 10 && 임시 <100){
        return "10보다 크고 100보다 작다"
    }
}

console.log(두가지이상(50))
console.log(두가지이상(2))

function 연달아검사(age){
    // if(age >= 18){
    //     return "성인"
    // }else{
    //     return "미성년자"
    // }

    // 8살 미만이면 어린이
    // 18미만이면 청소년
    // 그 이상은 성인
    if(age < 8){
        return "어린이"
    }else if(age < 18){
        return "청소년"
    }else{
        return "성인"
    }
}
console.log(연달아검사(17))
console.log(연달아검사(18))

function 삼항연산자(임시){
    // 비교식 ? 참 : 거짓
    return (임시 > 100 ? "100보다 크다" : "100보다 작다")
}

console.log(삼항연산자(150))