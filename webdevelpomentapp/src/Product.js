import React, {Component} from 'react';
import axios from 'axios';
class Product extends Component{



    constructor(){
        super();
        //invoke the axios call either get or post request
        axios.get("https://www.bing.com/shop?q=products&FORM=SHOPTB")
            
     
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
            <h2><b>Displays the product data from url</b></h2>
            <a href="https://www.bing.com/shop?q=products&FORM=SHOPTB">CLICK</a>
            </div>
        )
    }
}
export default Product