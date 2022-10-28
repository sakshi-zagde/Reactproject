import React, { Component } from "react";
import {Link} from 'react-router-dom';
import image from './image.png';
import car from "./car.gif";

import Navwelcome from './Navwelcome'


class Nav extends Component{
    render(){
        return(
            <div className="">
    
                <nav>
                    
                <div>
        
                <span><img src={image} style={{  height:'200px', padding:'left'}} className='logoprop' />
                 <h1 style={{textAlign:"right",backgroundImage: 'url('+car+')'}} className='logoprop1'>WELCOME TO REACT SPA DEVELOPMENT</h1></span> 
     
                 <div style={{'backgroundColor':'aquamarine','color':'blue'}}>
                 <Navwelcome/>
                 </div>
                
                 </div>
                </nav>
            </div>
        )
    }
}

export default Nav;