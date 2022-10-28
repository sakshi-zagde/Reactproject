import React, {Component} from 'react';
import car from "./car.gif";

import learning from './learning.jpg';

           
class Home extends Component{
    render(){
        return(
             
            <div >
            <div
            class="bg_image"
        style={{
          backgroundImage: 'url('+car+')'}}>
          
            <h1 style={{color:'violet'}}>WELCOME TO NAVGURUKUL BATCH 2022</h1>
          
            </div>
            <img src={learning} style={{ width:'900px', height:'500px'}}  />
            </div>
        )
    }
}
export default Home


