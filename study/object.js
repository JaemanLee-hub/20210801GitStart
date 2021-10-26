//데이터의 구조화 object
const p1 = {
  name: '김말자',
  age: 35,
}

const p2 = {
  name: '김덕자',
  age: 35,
  'one-phonenumber': '',
}

// const p = [p1, p2]

const findKey = 'name'

// 여기 !!
const p3 = {
  [findKey]: '김복자',
}

console.log(p3)

// 키 값을 빼오는 방법
console.log(p1.name)
console.log(p1['name']) // p2['one-phonenumber']
console.log(p1[findKey])

// 문제 ...
// newP만 수정하고싶었는데 p 가 수정됨 ..
const p = {
  name: '홍길동',
  age: 40,
}

const copyP = p
copyP.address = '안양'

console.log('p', p)
console.log('copyP', copyP)

console.log('=========')

// 해결방법은 기존의 원본을 복사한 새로운 값을 만들어내자 !
// => 펼침 연산자

const newP = { ...p, phone: '010-4519-0740' }

console.log('p', p)
console.log('newP', newP)
