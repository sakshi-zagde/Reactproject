import React ,{Component} from 'react';
import axios from 'axios';
class User extends Component{
    constructor(){
        super();
        //invoke the axios call either get or post request
        axios.get("https://jsonplaceholder.typicode.com/users",{
            params:{
                id:1
            }
        })
        // success
             .then(
                (response)=> {
                    // We are using JSON.stringify () to convert the json object into string
                    console.log("Entire response object " + JSON.stringify(response));
                    console.log("Only data :" + JSON.stringify(response.data));
                }
            )
        // failure
             .catch((error)=> console.log("Error occurred"))
        // either success or failure
             .finally(console.log("End of Axios component "))
    }
    render(){
        return(
            <div>
                <h1> This is User Component</h1>
            </div>
        )
    }
}
export default User;
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
class Nav extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div  className='logoprop'>
                        {/* <h1>WELCOME TO REACT SPA DEVELOPMENT</h1> */}
                        <img src="https://thumbs.dreamstime.com/b/print-180897353.jpg" height={'150px'} width={'150px'} ></img>
                       
                    </div>
                    <div>
                        <h1>WELCOME TO REACT SPA DEVELOPEMENT</h1>
                        <Link to='/home'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/Login'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to='/product'>Product</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Nav;
