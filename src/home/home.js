import React from "react";
import './home.css';
import '../index.css';
import Typical from 'react-typical'
import { Link } from "react-router-dom";


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <main>
                    <div>
                        <div className="w3-center">
                            <div className="w3-container">
                                <h1 className="wel"><b>WELCOME</b></h1>
                                <p className="w3-center"><b>I'm Adeola Emmanuel</b></p>
                            </div>
                        </div>
                        <div className="w3-center">
                        <Typical className="type" steps={['An Angular Js Developer  ', 'React Developer   ', 'In Summary a Fullstack Developer   ']} loop={Infinity}  />
                        </div>
                        <Link to="/adeola" className="next w3-block w3-center w3-btn w3-black w3-bottom">Next</Link>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home;