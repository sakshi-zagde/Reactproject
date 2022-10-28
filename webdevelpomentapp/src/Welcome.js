import React, {Component} from 'react';
import image from './image.png';
import car from "./car.gif";

import Navwelcome from './Navwelcome'


class Welcome extends Component{
    render(){
        return(
            <div>
        
           <span><img src={image} style={{  height:'200px', padding:'left'}} className='logoprop' />
            <h1 style={{textAlign:"right", backgroundPosition:'right top',backgroundImage: 'url('+car+')'}} className='logoprop1'>WELCOME TO REACT SPA DEVELOPMENT</h1></span> 

            <div style={{'backgroundColor':'aquamarine','color':'blue'}}>
            <Navwelcome/>
            </div>
           
            </div>
        )
    }
}
export default Welcome;