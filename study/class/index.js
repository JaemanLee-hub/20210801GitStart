//Component
//

// Class(=생성자함수 ES5) ->  붕어빵틀

//ES5

// function Person(name, age){
//     this.name = name
//     this.age = age
// }

// Person.prototype.getName = function () {
//   return this.name
// }

// Class ES6  클래스명 첫글자는 무조건 대문자
class Person {
  //Person 이 생성되면서 최초에 한번 / Class가 실행될떄 최소에 한번 동작하는 함수 -> constructor
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  //prototype :  자신의 부모격 객체와의 링크
  getName() {
    return this.name
  }
}
//

var person1 = new Person('홍길동', 10) // 붕어빵
var person2 = new Person('홍길자', 15) // 붕어빵
var person3 = new Person('홍길순', 18) // 붕어빵
