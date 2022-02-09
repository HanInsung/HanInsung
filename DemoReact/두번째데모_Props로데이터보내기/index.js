import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//props사용해 보기 

function FunctionHelloWorld(obj) {
  console.log(obj); 
  return <h1>Hello, {obj.name}</h1>; 
}

//함수컴포넌트로 만든 엘리먼트로 추가해도 클래스컴포넌트로 넣었을 때와 동일한 결과가 나온다.
ReactDOM.render(
  <FunctionHelloWorld name="전우치"/>,
  document.getElementById('root')
); 
