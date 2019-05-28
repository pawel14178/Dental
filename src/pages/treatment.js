import React from 'react';
import Header from "../components/header/headerPages";
import Footer from "../components/footer/footer";
import TreatWrapper from "../components/treatWrapper/treatWrapper"


const Treatment = () => {
    return(
        <div>
            <Header name={"headerTreat"} title={"Zabiegi"}/>
            <TreatWrapper />
            <Footer />
        </div>
    )
}
export default Treatment;