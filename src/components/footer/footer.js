import React from 'react';
import './footer.scss'
import SiteMap from "./sitemap/sitemap"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__logo">Dr Dorota Gwizdoń</div>
            <SiteMap />
            <div className="footer__copyrights">Powered by Paweł Jakubiec &copy; 2019</div>
        </div>
    )
}
export default Footer;
