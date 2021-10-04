/*
1. 값이 하나라도없으면 로그인버튼 미동작처리
2. 이메일 ,비밀번호 체크하여 로그인 성공 및 실패처리
3. 로그인 성공시 유저 이메일정보와 이름 화면에 노출
*/

document.getElementById('btn_submit').addEventListener('click', () => {
  //fetch 브라우저 기본 ajax같은거 , HTTP 요청시 , 비동기
  // 리턴값이 promise 면 then함수를 쓸수있다
  fetch('http://localhost:3000/user').then((response) => {
    console.log(response)
    //response.json 받아온 데이터를 사용하기위해 실행하는 함수
    response.json().then((data) => {
      console.log(data)
    })
  })
})
