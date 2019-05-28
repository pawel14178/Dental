import React, {Component} from 'react';
import TreatItem from "./treatList/treatList";
import './treatWrapper.scss'
import {TreatmentMenu} from '../../data/TreatmentMenu';


class TreatWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }
    }


    render() {
        return (
            <div className="treat__wrapper">
                <div className="treat__wrapper-list">
                    {TreatmentMenu.map(item => (
                        <TreatItem Show={() => this.setState({index : item.id})} key={item.id} TreatItem={{...item}} />
                    ))}
                </div>
               
                <div className="treat__wrapper-def">
                {TreatmentMenu[this.state.index].description} 
                    <div className="treat__wrapper-def-price">
                        <h1>Cena: {TreatmentMenu[this.state.index].price}zł </h1>
                        <button>Umów</button>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default TreatWrapper;