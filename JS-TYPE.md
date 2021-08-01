# JS Type

a에 값이 할당되기전에는 타입을 알수없다
=>동적 타이핑언어
```js
var a = 10; 
```

## Type

원시타입
- number
- string
- boolean
- null (선언조차 되지않은상태)
- undefined (선언은 되었지만 값이 없음)
- Symbol(ES6)

그 외는 전부 Object

```js
typeof 변수 // 변수타입 알아낼수있다
```

## 왜 타입스크립트가 나왔는가

```js
function add (a,b){
    return a + b ;
}
```