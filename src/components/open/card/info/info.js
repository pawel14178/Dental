import React from 'react';
import Days from "./days/days";
import Hours from "./hours/hours";

const Info = ({tab}) => (
    <div className="card__info">
        <Days />
        <ul className="card__info-hours">
            {tab.map(item => (
                <Hours key={item.id} {...item}/>
            ))}            
        </ul>

        <button className="card__button">Umów się</button>
    </div>
)

export default Info;