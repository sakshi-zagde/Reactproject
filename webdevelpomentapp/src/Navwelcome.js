import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navwelcome extends Component{
    render(){
        return(
            <div>
                <nav>
                    <Link to="/welcome/home"> <b>Home</b> </Link> &nbsp;&nbsp;
                    <Link to="/welcome/login"><b> Login </b></Link> &nbsp;&nbsp;
                    <Link to="/welcome/product"><b> Product </b></Link> &nbsp;&nbsp;
                </nav>
            </div>
        )
    }
}
export default Navwelcome;

