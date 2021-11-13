import Router from './router'

import HomePage from './pages/home'
import MyPage from './pages/my'
import SigninPage from './pages/signin'
import SignupPage from './pages/signup'
import NotFoundPage from './pages/notfound'

const ROUTES = {
  '/': HomePage,
  '/signin': SigninPage,
  '/signup': SignupPage,
  '/my': MyPage,
  '/404': NotFoundPage,
}

class App {
  constructor() {
    //특정 주소로 들어오면 주소에맞는 컴포넌트를 띄워준다
    // 두개의 인자 (app : 어디에그릴지 , routes:어떤주소가 어떤 컴포넌트를 그릴지)
    this.router = new Router({
      app: document.getElementById('app'),
      routes: ROUTES,
    })
  }
}

new App()
