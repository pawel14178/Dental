import React, {Component} from 'react';
import './nameLogo.scss';

class NameLogo extends Component{
    render() {
        return (
            <div className = "header__title">
                <h1 className = "header__title-h1">{this.props.title}</h1>
            </div>
        )
    }
}     

export default NameLogo;