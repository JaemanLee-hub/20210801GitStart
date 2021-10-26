const list = document.querySelector('#list')

/*
list.forEach((element) => {
  element.addEventListener('click', (event) => {
    console.log(event.target.innerText)
  })
})


*/

//이벤트 위임
// 부모요소에 이벤트를 넘겨주어 동적요소와 이벤트중복을 방지
//콜백함수
//addEventListener 이후에 실행되는 함수
//addEventListener
//DOM에 이벤트 추가

// 실행순서 addEventListener -> 콜백함수
list.addEventListener('click', (e) => {
  console.log(e.target.innerText)
})

const btn = document.querySelector('#btn_add')

btn.addEventListener('click', (event) => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode('append item'))

  const list = document.querySelector('#list')
  list.appendChild(li)
})
