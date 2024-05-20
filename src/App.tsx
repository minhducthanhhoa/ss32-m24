import React from 'react'
import ClassComponent from './components/ClassComponent';
import Form from './components/Form';
import Bai1 from './components/Bai1/Bai1';
import Bai2 from './components/Bai2/Bai2';
import Bai3 from './components/Bai3/Bai3';
import Bai4 from './components/Bai4/Bai4';
import Bai5 from './components/Bai5/Bai5';
import Bai6 from './components/Bai6/Bai6';

export default function App() {
//   setTimeout(() => {
//     console.log("ham setTimount duoc goi");
//   },5000)
//  let interval = setInterval(() =>{
//     console.log("ham setInterval duoc goi");
//   },1000)
  
//   const handleClick = () =>{
//     clearInterval(interval)
//   }
  return (
    <div>App
      {/* <button onClick={handleClick}>dừng Interval</button> */}
      <ClassComponent></ClassComponent>
      <Form></Form>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
    </div>
  )
}
