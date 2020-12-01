import React from 'react';
import '../index.css';
import './portfolio.css';
import Nav from '../nav/nav';
import login from "./img/chekmate/login.png";
import profile from "./img/chekmate/profile.png";
import dashboard from "./img/chekmate/dashboard.png";
import map from "./img/chekmate/map.png";

class Portfolio extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            portfolio: ['Chekmait','School portal'],
            id: []
        }
        this.folderReturn = this.folderReturn.bind(this)
    }
    
    
    folderClick(id){
        console.log(id);
        document.getElementById('row').classList.add('w3-hide')
        document.getElementById('display').classList.remove('w3-hide')
        if(id === this.state.portfolio[0]){
            this.setState({'id': [ login,profile,map,dashboard],})
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
                    <div className="w3-row" id="row">
                        {
                            this.state.portfolio.map((arr,ind)=>{
                                return(
                                    <div className="w3-col s6 m3 l3 w3-padding">
                                        <div className="w3-container w3-margin-right w3-border w3-round top text-folder w3-btn w3-padding" key={ind} id={arr} onClick={()=>this.folderClick(arr)}>
                                            <div className="w3-half w3-padding">{arr}</div>
                                            <div className="w3-half"></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="w3-row w3-hide" id="display">
                        {
                            this.state.id.map(arr=>{
                                return(
                                    <div className="w3-col s6 m4 l4 w3-margin-top w3-padding">
                                        <div className="">
                                            <button onClick={()=>this.folderReturn()} className="w3-black w3-btn">X</button>
                                        </div>
                                        <div className="w3-container top w3-btn w3-padding">
                                            <img src={arr} className="folder-img" />
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