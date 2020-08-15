import React from 'react';

import './App.css';

import Wordcard from './WordCard';




function App() {
  var number =""; //สุ่มตัวเลข2ชุด
  var  ran=Math.floor(Math.random()*2);
  if(ran==0){
    number="12345";
  }
  else if(ran==1){
    number="67890";
  }
 
  return (
    //เพิ่มclassName Appst
    //เพิ่มคำสั่งและชื่อเกมส์
    <body>
    <div className='Appst'> 
      <h1>GAME EVEN NUMBER</h1>
      <h2>please select an even number(2 number)</h2>
      <Wordcard value={number}/>
   
    </div>
    </body>
  );
}

export default App;
