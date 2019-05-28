import React from 'react';
import './App.scss';
import logo from './assets/images/logo/logo.jpg';
import Main from "./pages/main";
import Treatment from "./pages/treatment";
import Calendar from "./pages/calendar";
import Contact from "./pages/contact";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

const App = () => {
    return(
        <HashRouter>
        <div>
            <div className="nav">
                <div className="nav__logo">
                    <img src={logo} alt="logo" className="nav__logo-img"/>
                </div>    
                <div className="nav__menu">
                    <ul>
                        <li><NavLink exact to="/">Strona główna</NavLink></li>
                        <li><NavLink to="/treatment">Zabiegi</NavLink></li>
                        <li><NavLink to="/calendar">Kalendarz</NavLink></li>
                        <li><NavLink to="/contact">Kontakt</NavLink></li>
                    </ul>
                </div>
            </div>
            <Route exact path="/" component={Main} />
            <Route path="/treatment" component={Treatment} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/contact" component={Contact} />

        </div>
        </HashRouter>
    )
}
export default App;
