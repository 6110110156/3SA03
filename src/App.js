import React from 'react';

import './App.css';

import Wordcard from './WordCard';

const REMAINING_TIME = 6000;
const INCREMENT_TIME=2000;

const number ="1234567890"; //เปลี่ยนเป็นตัวเลข
function App() {

 
  return (
    //เพิ่มclassName Appst
    //เพิ่มคำสั่งและชื่อเกมส์
    <div className='Appst'> 
      <h1>GAME EVEN NUMBER</h1>
      <h2>please select an even number(5 number)</h2>
     <Wordcard value={number}/>
   
    </div>
  );
}

export default App;
