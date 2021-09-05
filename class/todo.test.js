class Todo {
  constructor(id, memo, isDone) {
    this.id = id
    this.memo = memo
    this.isDone = isDone
  }
}
/*
    *Todos
    *Todo를 관리한다

    *기능 : 추가, 삭제

*/
class Todos {
  constructor() {
    this.todos = []
  }
  addTodo(memo) {
    this.todos = [...this.todos, new Todo(Date.now(), memo, false)]
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id
    })
  }
  size() {
    return this.todos.length
  }
}

describe('TODO 테스트', () => {
  it('추가 - 하나의 TODO를 추가하면 todos 배열의 length는 1이된다', () => {
    const todoManager = new Todos()

    todoManager.addTodo('새로운 아이디')
    expect(todoManager.size()).toBe(1)
  })
  it('삭제 - 하나의 TODO를 삭제하면 todos 배열의 length는 0이된다(값이 1나 추가된상태에서)', () => {
    const todoManager = new Todos()

    todoManager.addTodo('새로운 아이디')
    todoManager.removeTodo(todoManager.todos[0].id)
    expect(todoManager.size()).toBe(0)
  })
  it('수정 - 완료상태가 false 값을 업데이트하면 true가 된다', () => {})
  it('필터링 - 완료상태인 todos의 length는 3개 일 것이다(완료3개 미완료1개값 추가한상태)', () => {})
})
