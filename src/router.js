class Router {
  constructor({ app, routes }) {
    this.app = app
    this.routes = routes

    this.componentBindEvent()
    // 최초 진입시 화면에 그린다
    this.render()
  }

  //바뀐 해쉬값을 캐치하여 다시그리기
  componentBindEvent() {
    window.onhashchange = () => {
      this.render()
    }
  }

  //push('/home') => home 페이지로 이동
  push(path) {
    window.location.hash = path.replace('/', '#')
  }
  //그리는놈
  render() {
    const hash = window.location.hash.replace('#', '/') || '/'

    console.log('hash', hash.replace('#', '/'))
    const Component = this.routes[hash]
      ? new this.routes[hash]({
          router: {
            push: this.push,
          },
        })
      : new this.routes[hash]('/404') // ex, /, signup

    this.app.innerHTML = Component.render()
    if (Component.componentBindEvernt) {
      Component.componentBindEvernt()
    }
  }
}

export default Router
