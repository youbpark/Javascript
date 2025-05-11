// 객체(Object)

let arr = [1,2,3]
arr[1]

let object = {
    "A" : 'a',
    "B" : 'b',
    "C" : 'c'
}
console.log(object["A"])

let homesweethome = {
    "이름" : "루이",
    "나이" : 1,
    "주인" : "언니",
    "특징" : function(){
        console.log("손")
    }
}

console.log(homesweethome["이름"])
console.log(homesweethome.이름)
homesweethome.특징()