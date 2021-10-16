/*
1. 값이 하나라도없으면 로그인버튼 미동작처리
2. 이메일 ,비밀번호 체크하여 로그인 성공 및 실패처리
3. 로그인 성공시 유저 이메일정보와 이름 화면에 노출
*/

class LoginComponent {
  constructor() {
    this.state = {
      user: [],
    }
    this.componentDisMount()
  }

  //최초 그려진후
  componentDisMount() {
    //먼저 화면을 그리고
    this.render()
    //이벤트를 걸어준다
    this.chkLogin()
  }
  chkLogin() {
    document.getElementById('btn_submit').addEventListener('click', () => {
      //fetch 브라우저 기본 ajax같은거 , HTTP 요청시 , 비동기
      // 리턴값이 promise 면 then함수를 쓸수있다
      fetch('http://localhost:3000/user').then((response) => {
        //console.log(response)
        //response.json 받아온 데이터를 사용하기위해 실행하는 함수
        response.json().then((data) => {
          //console.log(data)
          const mail = document.getElementById('email').value
          const pwd = document.getElementById('password').value

          if (!mail || !pwd) {
            alert('로그인실패')
            return false
          }

          if (mail === data.email && pwd === data.password) {
            alert('로그인성공')
            const createNameP = document.createElement('p')
            const createEmailP = document.createElement('p')
            createNameP.textContent = data.name
            createEmailP.textContent = data.email
            document.getElementById('login').appendChild(createNameP)
            document.getElementById('login').appendChild(createEmailP)
          } else {
            alert('로그인실패')
            return false
          }
        })
      })
    })
  }
  render() {}
}

new LoginComponent()
