import React from 'react';
import CharacterCard from './CharacterCard';

export default function Wordcard(prons){
    return(
    <div>
       {
        Array.from(prons.value).map((c,i)=> <CharacterCard value={c} key={i}/>)
      }
     

    </div>
    )
}