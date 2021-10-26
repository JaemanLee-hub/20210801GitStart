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

export default Person
