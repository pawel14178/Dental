import React from 'react'
import './social.scss';
import fbButton from '../../../assets/images/header/fb.png';
import twButton from '../../../assets/images/header/tw.png';
import liButton from '../../../assets/images/header/li.png';

const Social = () => (
    <div className="header__social">
        <div className="header__social-fb">
            <a href="#"><img src={fbButton} alt="Facebook" /></a>
        </div>
        <div className="header__social-tw">
            <a href="#"><img src={twButton} alt="Twitter" /></a>
        </div>
        <div className="header__social-li">
            <a href="#"><img src={liButton} alt="LinkedIn" /></a>
        </div>
    </div>
)

export default Social;