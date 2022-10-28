import React, {Component} from 'react';
import './Login.css';
import './car.gif'
import './App.css'

class Login extends Component{
   
    render(){
        
        return(
            <div style={{borderRadius:'20px'}} className='logoprop'>
            <header>  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" integrity="sha384-xeJqLiuOvjUBq3iGOjvSQSIlwrpqjSHXpduPd6rQpuiM3f5/ijby8pCsnbu5S81n" crossorigin="anonymous"/>
            </header>
            <div style={{fontSize:"25px",textAlign: "right "}}><h1 style={{color:"yellow"}}><b>This is The Login Page </b><span class="zoom-out"></span></h1> </div>
            <form class="h1_">
            
            
            <label >
            
           <span style={{color:'darkred'}}><b><i>User name</i> </b> </span> :<p><p class="bi bi-user" style={{ textAlign:'left'}}></p><input type="text" class="form-control w-100"></input></p>  <br/>
           <span style={{color:'darkred'}}><b><i> Password</i> </b> </span>   : <span class="bi bi-user"></span><input type="password" class="form-control w-100"/><br></br>
        
            </label>
            <div>
            <button class="btn btn-success w-50">Login</button><br/>
            </div>
            </form>

            </div>
        )
    }
}
export default Login
