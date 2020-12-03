import React from "react";
import './skills.css';
import '../index.css'
import Nav from '../nav/nav'
import html from './img/html5.svg'
import css from './img/css3.svg'
import js from './img/js.svg'
import angular from './img/angular.svg'
import react from './img/react.svg'
import mysql from './img/mysql.svg'
import jquery from './img/jquery.png'
import python from './img/python.png'
import ts from './img/ts.png'
import wp from './img/wordpress.png'
//import { Link } from "react-router-dom";

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="w3-container w3-animate-left" id="up">
                    <Nav />
                </div>
                <div className="w3-container w3-animate-left top">
                    <div className="w3-row">
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={html} alt="html" className="w3-margin-top svg" />
                            <p className="w3-center"><b>HTML5</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={css} alt="css" className="w3-margin-top svg" />
                            <p className="w3-center"><b>CSS3</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={js} alt="js" className="w3-margin-top svg" />
                            <p className="w3-center"><b>JavaScript</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={angular} alt="angular" className="w3-margin-top svg" />
                            <p className="w3-center"><b>Angular</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={react} alt="react" className="w3-margin-top img" />
                            <p className="w3-center"><b>React</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={mysql} className="w3-margin-top img" />
                            <p className="w3-center"><b>Mysql</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={ts} alt="ts" className="w3-margin-top img" />
                            <p className="w3-center img"><b>TypeScript</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={python} alt="python" className="w3-margin-top img" />
                            <p className="w3-center img"><b>Phython</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={jquery} alt="jq" className="w3-margin-top img" />
                            <p className="w3-center img"><b>JQUERY</b></p>
                        </div>
                        <div className="w3-col s6 m4 l4 w3-center">
                            <img src={wp} alt="wp" className="w3-margin-top img" />
                            <p className="w3-center"><b>WORDPRESS</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;