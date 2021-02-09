import React from 'react';
import '../index.css';
import './portfolio.css';
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import Nav from '../nav/nav';
import login from "./img/chekmate/login.png";
import profile from "./img/chekmate/profile.png";
import dashboard from "./img/chekmate/dashboard.png";
import map from "./img/chekmate/map.png";
import portal1 from "./img/portal/1.png";
import portal2 from "./img/portal/2.png";
import portal3 from "./img/portal/3.png";
import portal4 from "./img/portal/4.png";
import portal5 from "./img/portal/5.png";

class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            portfolio: ['Chekmait','School portal'],
            id: [],
        }
        this.folderReturn = this.folderReturn.bind(this)
    }
    
    
    folderClick(id){
        console.log(id);
        document.getElementById('row').classList.add('w3-hide')
        document.getElementById('display').classList.remove('w3-hide')
        if(id === this.state.portfolio[0]){
            this.setState({'id': [ login,profile,map,dashboard],})
        }if(id === this.state.portfolio[1]){
            this.setState({'id': [ portal1, portal2 , portal3, portal5, portal4],})
        }

    }

    folderReturn(){
        document.getElementById('row').classList.remove('w3-hide')
        document.getElementById('display').classList.add('w3-hide')
    }



    render(){
        return(
            <div>
                <div className="w3-animate-left">
                    <Nav />
                </div>
                <div className="w3-container w3-animate-left port">
                    <div className="w3-center">
                        <h2>PORTFOLIO</h2>
                    </div>
                    <div className="w3-row">
                        <div className="w3-col s6 m6 l6">
                            <a href="https://www.linkedin.com/in/adeola-emmanuel-326513199/"><img src={linkedin} alt='linkdein' className='w3-right' style={{width: '60px', height: '50px'}} /></a>
                        </div>
                        <div className="w3-col s6 m6 l6">
                            <a href="https://github.com/Adeolaemmanuel"><img src={github} alt='linkdein' className='w3-margin-right' style={{width: '60px', height: '50px'}} /></a>
                        </div>
                    </div>
                    <div className="w3-row" id="row">
                        {
                            this.state.portfolio.map((arr,ind)=>{
                                return(
                                    <div className="w3-col s6 m3 l3 w3-padding">
                                        <div className="w3-border w3-round top text-folder w3-btn w3-padding" key={ind} id={arr} onClick={()=>this.folderClick(arr)}>
                                            <div className="w3-half w3-padding">{arr}</div>
                                            <div className="w3-half"></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="w3-row w3-hide" id="display">
                        <div className="w3-center">
                            <button onClick={()=>this.folderReturn()} className="w3-black w3-btn">X</button>
                        </div>
                        {
                            this.state.id.map(arr=>{
                                return(
                                    <div className="w3-col s12 m12 l12 w3-margin-top w3-padding">
                                        <div className="w3-container top w3-btn w3-padding">
                                            <img src={arr} alt='img' className="folder-img" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default Portfolio;