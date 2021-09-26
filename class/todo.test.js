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
  //추가
  addTodo(memo) {
    this.todos = [...this.todos, new Todo(Date.now(), memo, false)]
  }
  addTodo2(memo) {
    this.todos = [...this.todos, new Todo(Date.now(), memo, true)]
  }
  //제거
  // filter 는 true인 값만 리턴한다. => input , output의 크기가 달라질수있다.
  // map은 원본배열로 새로운 배열을 만드는 함수 => input 과 output의 사이즈가 같다.
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id !== id
    })
  }
  //수정
  modifyTodo(id) {
    //id를 받아서, id를 가진 isDone 토글링한다. => toggle은 !를 쓴다
    this.todos.map((todo) => {
      if (todo.id !== id) {
        return todo
      }
      return { ...todo, isDone: !todo.isDone }
    })
  }
  //완료상태 확인
  getCompletedTodos() {
    return this.todos.filter((todo) => {
      return todo.isDone
    })
  }

  /*
  statusTodo() {
    this.todos = this.todos.filter((todo) => {
      return todo.isDone
    })
  }
  */
  size() {
    return this.todos.length
  }

  filter(type) {
    switch (type) {
      case 'COMPLETED': {
        return this.todos.filter((todo) => {
          return todo.isDone
        })
      }
      case 'ACTIVE': {
        return this.todos.filter((todo) => {
          return !todo.isDone
        })
      }
      case 'ALL': {
        return this.todos
      }
      default: {
        return this.todos
      }
    }
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
  it('수정 - 완료상태가 false 값을 업데이트하면 true가 된다', () => {
    // const todoManager = new Todos()
    // todoManager.addTodo('새로운 아이디')
    // todoManager.modifyTodo(this)
    // expect(todoManager.todos[2]).toBe(true)
  })
  it('필터링 - 완료상태인 todos의 length는 3개 일 것이다(완료3개 미완료1개값 추가한상태)', () => {
    // const todoManager = new Todos()
    // todoManager.addTodo('새로운 아이디')
    // todoManager.addTodo2('새로운 아이디2')
    // todoManager.addTodo2('새로운 아이디3')
    // todoManager.addTodo2('새로운 아이디4')
    // todoManager.statusTodo(this)
    // expect(todoManager.size()).toBe(3)
  })
})
