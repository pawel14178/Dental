import React from 'react';
import Header from "../components/header/header";
import About from "../components/about/about";
import Open from "../components/open/open";
import Request from "../components/request/request";
import Footer from "../components/footer/footer";

const Main = () => {
    return(
        <div>
            <Header />
            <About />
            <Open />
            <Request />
            <Footer />
        </div>
    )
}
export default Main;