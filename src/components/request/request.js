import React from 'react';
import './request.scss';
import Contact from "./contact/contact";
import Form from "./form/form";

const Request = () => {
    return(
        <div className="request">
            <h1 className="request__text">Umów wizytę</h1>
            <Contact />
            <Form />
        </div>
    )
}
export default Request;
