import React from 'react';
import CharacterCard from './CharacterCard';

import '../index.css';



const CharactersList = (props) =>{
    return(
        <div>
            {props.characters.map( (char, index) =>{
                return <CharacterCard key={index} char={char}/>
            })}
        </div>
    )
}


export default CharactersList;