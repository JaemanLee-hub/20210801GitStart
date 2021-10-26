// 1. 함수 호이스팅
// => 함수를 상단으로 끌어올린다

add()

function add() {
  console.log('add')
}

//=> 실행당시
//=> 함수호이스팅은 함수자체를 끌어올린다

// function add() {
//     console.log('add')
// }
// add()

// 2. 변수 호이스팅

console.log('add2', add2)

var add2 = function () {
  console.log('add2')
}

// => 실행당시
// => 변수의 선언부를 최상단으로 끌어올린다 (예외없음)

// var add2
// add2() // undefinded

// add2 =function () {
//     console.log('add2')
// }

// 3. let, const 의 변수 호이스팅

console.log(add3)

let add3 = function () {}

// TDZ박스(규칙 값이 할당되지않은 상태의 값은 접근 X var는 해당안됨)
