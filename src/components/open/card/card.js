import React from 'react';
import City from './city/city';
import Info from './info/info';


const Card = ({city, street, tab}) => (
    <div className="card">
        <City city={city} street={street} />
        <Info tab={tab}/>
    </div>
)

export default Card;