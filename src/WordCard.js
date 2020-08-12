import React from 'react';
import CharacterCard from './CharacterCard';

export default function Wordcard(prons){
   
    const activationHandler = c => 
    { 
        console.log(`${c} has been activated.`) 
    }
   
    return(
    <div>
       {
        Array.from(prons.value).map((c,i)=>
         <CharacterCard value={c} key={i} activationHandler={activationHandler}/>
         )
      }
     

    </div>
    )
}