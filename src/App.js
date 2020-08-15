import React from 'react';

import './App.css';

import Wordcard from './WordCard';

const number ="1234567890";
function App() {
  return (
    <div className='Appst'>
     <Wordcard value={number}/>
    </div>
  );
}

export default App;
