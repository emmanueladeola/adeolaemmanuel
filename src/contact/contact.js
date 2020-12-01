import React from 'react';
import '../index.css';
import './contact.css';
import Nav from '../nav/nav';
import placeholder from './img/placeholder.svg'
import phone from "./img/phone-call.svg";
import email from "./img/gmail.svg";


class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="w3-animate-left">
                    <Nav />
                </div>
                <div className="w3-container w3-animate-left">
                    <div className="w3-row">
                        <div className="w3-center top">
                            <h2><b>CONTACT</b></h2>
                        </div>
                        <div className="w3-row rtop">
                            <div className="w3-col s6 m3 l3">
                                <div className="w3-center">
                                    <img src={placeholder} className="width" />
                                    <p><b>BASED IN</b></p>
                                    <p><b>LAGOS, NG</b></p>
                                </div>
                            </div>
                            <div className="w3-col s6 m3 l3">
                                <div className="w3-center">
                                    <img src={phone} className="width" />
                                    <p><b>+234 903 083 4160</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="w3-row rtop">
                            <div className="w3-col s6 m3 l3">
                                <div className="w3-center">
                                    <img src={email} className="width" />
                                    <p><b><a href="mailto:adeolaemmanuel006@gmail.com">adeolaemmanuel006@gmail.com</a></b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;