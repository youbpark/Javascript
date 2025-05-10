// +,-,*,/,%
// 프로그래밍 언어는 기호를 통해 연산자(연산기능)를 제공
let num1 = 1
let num2 = 2

let result = num1 + num2
console.log(result)

// num1 = num1 + 10 // num1 = 11
num1 += 10
console.log(num1)
num2 += 20 // num2 = num2 + 20 
console.log(num2)

num1 = 1
num2 = 2
num1 = num1 - 1
console.log(num1)
num2 -= 3
console.log(num2)

num1  = num1 * 2
num2 = num2 / 3
console.log(num1)
console.log(num2)
num1 = num1 % 2

// 문자열은 + 만 사용 가능
let str1 = "맹구"
let str2 = "HI"

result = str1 + str2
console.log(result)

result += "^^" // 결과에 ^^를 붙인다
console.log(result)

let intro = "Hi " + str1 + " nice meet you"
console.log(intro)
console.log(intro.length) // 글자 갯수
console.log(intro[0]) // H
console.log(intro[intro.length-1]) // 맨 뒤에 있는 글자 
