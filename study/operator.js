// And(&&) Or(||)

// AND 둘다 이어야지 참 OR 하나라도 참이면 참

const b1 = true // 고정
const b2 = true // 고정
const b3 = true // true ? false

//AND
if (b1 && b2 && b3) {
  console.log('모두참')
}

if (b3 && b1 && b2) {
  console.log('실패할수 있는 조건을 앞에다 두는것이 좋다')
}

//OR
if (b1 || b2 || b3) {
  console.log('하나라도참')
}

// Falsy
// 0, null , undefined, '' => 조건문으로 들어갔을때 false로 판단

const result = 0 // 연산후 결과값이 0 100

if (!result) {
  console.log('실패했습니다')
}

const message = ''

if (!message) {
  console.log('실패했습니다')
}
