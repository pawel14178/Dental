import React, {Component} from 'react';
import NameLogo from './nameLogo/nameLogo';

import './header.scss';

class Header extends Component{
    render() {
        return (
        <div className='header'>

            <img src={require(`../../assets/images/header/${this.props.name.toLowerCase()}.png`)} alt="background"/>
            <NameLogo />


        </div>
        )
    }
}
export default Header;
