/*
    *1. state = []

    * 라이프싸이클
    => 컴포넌트의 상태 변화를 감지 할 수있는 함수
    => 최초 그려진 후 , 상태값이 변했을때 ,컴포넌트 사라질때 등
*/

class GymManagerComponent {
  constructor() {
    this.state = {
      trainers: [], // 트레이너 정보를 가진 배열
    }
    this.componentDisMount()
  }

  bindEvent() {
    //변수앞에 _는 내부에서만 쓰는값(감춰진값)
    const _nameInput = document.getElementById('name')
    const _levelInput = document.getElementById('level')
    document.getElementById('btn_submit').addEventListener('click', (e) => {
      e.preventDefault
      if (_nameInput.value && _levelInput) {
        this.addTrainer(_nameInput.value, _levelInput.value)
      }
    })
  }

  //최초 그려진후
  componentDisMount() {
    //먼저 화면을 그리고
    this.render()
    //이벤트를 걸어준다
    this.bindEvent()
  }

  //
  login(name, level) {
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        //브라우저 기본 장착 헤더
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        level,
        attendanceStatus: 'Done', //'Done' =  완료
      }),
    }).then((response) => {
      console.log(response)
    })
  }
  //화면에 state 값을 표현하기 위한 용도
  render() {}
}

new GymManagerComponent()
