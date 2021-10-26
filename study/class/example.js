// 20210926
// 투수  리턴값이 던지는 값
function add() {
  return 10
}

function example(a) {
  return a + 100
}
//가공된 값이 밖에서 필요할때 return을 해준다. 함수에 리턴이 없다면 디폴트는 undefined이다.

arr = [가,나,다,라]

arr.map(('나') =>{

})

const a =['가','나','다','라'].map((value,index, array) => {
	if(value ==='나'){
  	return value + 100
   // console.log(value)
  }

  return value
  
})
console.log(a)

//map(filter ; array 관련 함수) 함수는 배열받아서 원본배열을 바탕으로 새로운 배열을 리턴해주는것.
//리턴시 받아주지않으면 날아감. 받아줘야함
//