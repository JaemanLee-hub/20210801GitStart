class Router {
  constructor({ app, routes }) {
    this.app = app
    this.routes = routes

    // 최초 진입시 화면에 그린다
    this.render()
  }
  render() {
    const hash = window.location.hash.replace('#', '/') || '/'

    console.log('hash', hash.replace('#', '/'))
    const Component = this.routes[hash] // ex, /, signup

    this.app.innerHTML = new Component().render()
  }
}

export default Router
