import React from 'react';
import './styles.css'

//JSX : javascript XML
//역할 : javascript 가 html을 제어해요.
//1. js에서 html을 생성하고,
//2. js에서 html을 제어해요.

//한계점 => jsx는 하나의 component만 리턴할 수 있다.
// 2개의 컴포넌트를 리턴하는 방법 => fragment

//빽엔드 영역
//데이터베이스 연동
//인터넷 네트워트 연결
//실시간 채팅 기능을 만드는 API를 연결

//React는 언어가 아님
//Javascript의 Library

function App() {
  return ( //자판기라고 보면 return을 누르면 음료수가 나오는 것을 말함
    <>
    <h1> Hello World!! </h1>
    <p>REATCT</p>
    
    <button>INCREMENT</button>
    <button>DECRENENT</button>
    </>
  );
}

//App이라는 기능을 출력해줌
export default App;