import React from 'react';
import { Card } from '../Components/card.component';
import '../CSS/card-list.css';


export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
);
 