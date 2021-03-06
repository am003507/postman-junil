# Postman Clone Coding

## 목표

8월 25일까지 최대한 포스트맨과 유사한 앱을 만들기

## 데모

https://est-react-study.github.io/postman-junil/

## 기술스택

- [X] create-react-app
- [X] react-app-rewired
  - CRA의 설정을 덮어쓰기 위함
  - eject를 사용하지 않기 위함
  - 관련링크
    - [Create-React-App에서 Eject사용안하기(customize-cra, react-app-rewired)](https://medium.com/@jsh901220/create-react-app%EC%97%90%EC%84%9C-eject%EC%82%AC%EC%9A%A9%EC%95%88%ED%95%98%EA%B8%B0-customize-cra-react-app-rewired-10a83522ace0)
    - [react-app-rewired repository](https://github.com/timarney/react-app-rewired)
- [X] cross-env
  - 운영체제에 종속되지 않는 환경변수 설정을 위함.
  - [Node.js 기반에서 환경변수 사용하기 (dotenv, cross-env)](https://velog.io/@public_danuel/process-env-on-node-js)
  - [cross-env repository](https://www.npmjs.com/package/cross-env)
  - [여러 개의 변수를 설정하는 방법](https://github.com/kentcdodds/cross-env/issues/15)
- [X] typescript
  - [한눈에 보는 타입스크립트](https://heropy.blog/2020/01/27/typescript/)
  - [TypeScript and React](https://fettblog.eu/typescript-react/)
- [ ] hook
- [ ] react-redux
- [ ] redux-saga
- [X] recoil
  - 페이스북에서 직접 만든 상태관리 라이브러리
  - [공식문서](https://recoiljs.org/)
  - [Recoil 알아보기](https://medium.com/humanscape-tech/recoil-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-285b29135d8e)
  - [Recoil vs Redux | The Ultimate React State Management Face-Off](https://dev.to/chandan/recoil-vs-redux-the-ultimate-react-state-management-face-off-35b)
  - [Recoil - 또 다른 React 상태 관리 라이브러리](https://ui.toast.com/weekly-pick/ko_20200616/)
  - [사용 예제 Repository](https://github.com/chandan-reddy-k/redux-vs-recoil-example)
- [X] @emotion/core
  - [공식문서](https://emotion.sh/docs/introduction)
  - [CSS 2019 - CSS IN JS](https://2019.stateofcss.com/technologies/css-in-js/)
    - emotion이 제일 만족도가 높다.
  - [emotion을 활용한 크몽 프론트엔드 스타일링 시스템](https://brunch.co.kr/@kmongdev/17)
  - [다양한 방식의 리액트 컴포넌트 스타일링 방식](https://velog.io/@velopert/react-component-styling)
  - [emotion vs styled-component](https://ideveloper2.dev/blog/2019-05-05--thinking-about-emotion-js-vs-styled-component/)
  - [Thinking about emotion js vs styled component](https://ideveloper2.dev/blog/2019-05-05--thinking-about-emotion-js-vs-styled-component/)
    - 이 포스트가 제일 잘 정리된 것 같습니다.
- [ ] react-router-dom
- [ ] next
- [ ] Apollo GraphQL
- [X] ES6 Module
- [ ] history
- [ ] rest
- [ ] core-js
- [X] axios
- [ ] formik
- [ ] yup
- [ ] react-table 7
- [ ] docker
- [ ] aws
- [ ] eslint + prettier setting
- [X] webpack
- [ ] React Testing Library + Jest
- [X] Sass @mixin and @include