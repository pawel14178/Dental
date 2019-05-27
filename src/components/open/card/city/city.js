import React from 'react';

const City = ({city, street}) => (
    <div className="card__city">
        <h2>{city}</h2>
        <h3>ul. {street}</h3>
        
        
    </div>
)

export default City;