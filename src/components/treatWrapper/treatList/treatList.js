import React, {Component} from 'react';

class TreatItem extends Component{



    render() {
        return (

            <button onClick={this.props.Show} className="treat__wrapper-list-item">{this.props.TreatItem.name}</button>

        )
    }
    
}

export default TreatItem;

