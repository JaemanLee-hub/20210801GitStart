# GitHub Study

READ.md 라는 파일은 프로젝트의 소개글을 의미한다.

클론 풀

### Markdown

마크다운은 String 을 HTML로 변환해준다.

- .md는 마크다운 확장자를 의미한다

```js

코드블록
```

- [링크](www.naver.com)

![alt](이미지 url)

### VS code 내에서 파일색상 의미

- 초록색 :추가된파일
- 누런색 : 기존의  파일이 변화함



### GitHub 명령어

1. git status : 
현재 git이 알고있는 파일상태   
파일이 빨강색이면 git은 현재 변경된 상태를 모름
```
$ git stauts
```

2. git add : 
현재 변경사항을 git한테 알려준다.
```
git add .
```
.은 현재 위치한 곳의 모든파일을 의미함

3. git commit : 
commit은 하나의 작업을 의미.
commit은 메세지를 가진다 (-m)
```
$ git commit -m "메세지"
```
4. git push :
commit된 결과물들을 remote 서버에 반영한다.
```
$ git push origin <branch name>
```

master = branch name (기둥이되는 브랜치)

### NPM (node package manager)

### package.json

- 프로젝트에 대한 정보를 담고있다.
- 내부에서 사용되는 라이브러리들, 단축 명령어 등등등

### install

- 외부 라이브러리를 다운받는다.
- 결과물은 node_modules에 다운 받아진다.

```
$ npm install or npm i <패키지명>
$ npm install --save or npm i -S <패키지명>
$ npm install --save-dev or npm o -D <패기지명>
```