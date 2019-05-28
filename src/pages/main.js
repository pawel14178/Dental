import React, {Component} from 'react';
import Header from "../components/header/header";
import About from "../components/about/about";
import Open from "../components/open/open";
import Request from "../components/request/request";
import Footer from "../components/footer/footer";

class Main extends Component {
    render() {
        return(
            <div>
                <Header name={"header1"}/>
                <About />
                <Open />
                <Request />
                <Footer />
            </div>
        )
    }
}
export default Main;