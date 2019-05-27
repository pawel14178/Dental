import React from 'react';
import TreatList from "./treatList/treatList";
import './treatWrapper.scss'
import {TreatmentMenu} from '../../data/TreatmentMenu';

console.log(TreatmentMenu[0].description);

const TreatWrapper = () => {

    var x = 2;

    return(
        <div className="treatWrapper">
            <div className="treatWrapper__button">
                {TreatmentMenu.map(item => (
                    <TreatList key={item.id} {...item}/>
                ))}  
            </div>
                
            <p className="treatContent">{TreatmentMenu[x].description}</p>
        </div>
    )
}
export default TreatWrapper;