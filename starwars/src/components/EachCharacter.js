import React from 'react';
import '../index.css';



const EachCharacter = (props) =>{
    return(
        <div>
            <h1>{props.char.name}</h1>
        </div>
    )
}


export default EachCharacter;