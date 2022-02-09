import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//JSX와 JavaScript같이 사용하기
const user = {
  firstName : "우치",
  lastName : "전"
}
function today() {
  let year = new Date().getFullYear();
  let month = new Date().getMonth() + 1; 
  let day = new Date().getDate();

  const today = <h4>Today: {year} / {month} / {day}</h4>
  return today; 
}

function SayHello() {
  let time = new Date().getHours(); 
  if (time >= 17 || time < 6) {
    return <h1>Good Night!</h1>
  } else {
    return <h1>Good Morning!</h1>
  }
}

//JSX사용하기 
class HelloWorld extends React.Component { 
  render() { 
    return <div> 
      <h1>Hello, {user.firstName} {user.lastName}!</h1> 
      <hr/>
      {today()}
      <h3>{SayHello()}</h3>
      </div>; 
  } 
}


ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
); 
