import React from 'react';
import NameLogo from './nameLogo/nameLogo';
import Social from "./social/social"
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <NameLogo />
            <Social />
        </div>
    )
}
export default Header;
