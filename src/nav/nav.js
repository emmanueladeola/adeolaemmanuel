import React from "react";
import './nav.css';
import '../index.css'
import { Link } from "react-router-dom";

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open(){
        document.getElementById('leftMenu').classList.remove('w3-hide')
    }
    close(){
        document.getElementById('leftMenu').classList.add('w3-hide')
    }

    render(){
        return(
            <div>
                <nav className="w3-bar w3-padding">
                    <button className="w3-button w3-black w3-hide-large w3-hide-medium w3-xlarge w3-left" onClick={this.open}>&#9776;</button>
                    <div className="w3-center w3-hide-small">
                        <Link to="/adeola" className="w3-bar-item nav">HOME</Link>
                        <Link to="/skills" className="w3-bar-item nav">SKILLS</Link>
                        <Link to="/portfolio" className="w3-bar-item nav">PORTFOLIO</Link>
                        <Link to="/contact" className="w3-bar-item nav">CONTACT</Link>
                    </div>
                </nav>
                <nav className="w3-sidebar w3-hide w3-bar-block bar w3-animate-left" id="leftMenu" >
                    <div className="w3-center">
                        <button className="w3-bar-item w3-button w3-large" onClick={this.close}>Close &times;</button>
                        <Link to="/adeola" className="w3-bar-item w3-margin-top w3-btn">HOME</Link>
                        <Link to="/skills" className="w3-bar-item w3-margin-top w3-btn">SKILLS</Link>
                        <Link to="/portfolio" className="w3-bar-item w3-margin-top w3-btn">PORTFOLIO</Link>
                        <Link to="/contact" className="w3-bar-item w3-margin-top w3-btn">CONTACT</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;