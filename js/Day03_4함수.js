// 프로그래밍 언어 : 변수 + 함수 + 자료구조
// 변수 : 값을 저장하는 공간
// 함수 : 코드를 저장하는 공간

// 변수 생성 : var, let, const
// 함수 생성 : function => 함수 사용 이용은 코드 재활용을 위해, 가독성을 위해

// 함수 제작 방법
function varName(){
    // 중괄호 안에 실행할 코드 입력
    console.log("실행 코드")
}

varName()

// () : 바뀔 수 있는 여지가 있으면 사용
function exampleVar(num1, num2){
    console.log(num1 + num2)
}
exampleVar(10,2)
exampleVar(5,5)

function returnFun(num){
    return num + 1
}

let returnResult = returnFun(10)
console.log(returnResult)

// function(){}
//() => {}
let func = () => {
    console.log("화살표 함수")
}
func()