import React from 'react';
import '../index.css';



const CharacterCard = (props) =>{
    return(
        <div className="list-container">
            <div className="character-card">
            <h1>{props.char.name}</h1>
                <ul>
                    <li>Born: {props.char.birth_year}</li>
                    <li>Height: {props.char.height}</li>
                    <li>Hair: {props.char.hair}</li>
                    <li>Eye Color: {props.char.eye_color}</li>
                </ul>
            </div>
        </div>
    )
}


export default CharacterCard;