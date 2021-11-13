//해치할당자
import { setUser } from '../auth'

class SigninPage {
  constructor(props) {
    console.log(props)
    this.props = props
  }
  componentBindEvernt() {
    //_  내부에서 사용하는 변수
    const _emailEl = document.getElementById('email')
    const _passwordEl = document.getElementById('password')

    document
      .getElementById('btn_submit')
      .addEventListener('click', async (e) => {
        const email = _emailEl.value
        const password = _passwordEl.value

        const response = await fetch('http://localhost:3000/user')
        const user = await response.json()

        if (user.email === email && user.password === password) {
          console.log('로그인성공', user)

          setUser(user)
          this.props.router.push('/')
        }
        console.log('response', response)
        console.log('user', user)
      })
  }
  render() {
    return `<div>
    <h2>SigninPage</h2>
    <input id="email" placeholder="이메일을입력하세요">
    <input id="password" type="password">
    <button id="btn_submit">로그인</button>
    
    </div>
    `
  }
}

export default SigninPage
