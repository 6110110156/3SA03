import React, { useState } from 'react';
import _  from 'lodash';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let number = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(number))
    return {
       number,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }       
}

export default function Wordcard(prons){
   
    const [state, setState] = useState(prepareStateFromWord(prons.value))
    const activationHandler = c => 
    { 
        console.log(`${c} has been activated.`) 
        
        let guess = state.guess+c;
        setState({...state,guess})

        //เลือกเฉพาะเลขคู่เท่านั้น 5ตัว
       if(guess.length == 5){
            if(guess/2==0){
                //แสดงข้อความYou win
                alert("You Win!!");
                setState({...state, guess: '', completed: true})
            }else{
                //แสดงข้อความ  You lose
                alert("You lose!!");
                setState({...state, guess: '', attempt: state.attempt + 1})
                }
            }  

       
    }
   
    return(
    <div>
       {
          state.chars.map((c,i)=>
         <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
         )
      }
     

    </div>
    )
}