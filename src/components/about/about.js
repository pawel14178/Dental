import React from 'react'
import './about.scss';
import TextAbout from './text/text';
import PortraitAbout from './portrait/portrait';
import Background from '../../assets/images/about/background.png';


const About = () => (
    <div className="About">
        <img src={Background} alt="About" className="About__image"/>
        <PortraitAbout />
        <TextAbout />
    </div>
);

export default About;