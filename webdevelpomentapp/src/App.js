import './App.css';

import Home from './Home';
import Login from './Login';
import Product from './Product';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Nav from './Nav';





function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <BrowserRouter>      
        <Nav/>
        {/* define the url / route for the component as it is a collection of routes - routes  */}
          <Routes>
            {/* For each compoennt define the route */}
            <Route path='/' element={App} ></Route>
            
            
            <Route path="/welcome/home" element={<Home/>}></Route>
            <Route path="/welcome/login" element={<Login/>}></Route>
             <Route path='/welcome/product' element={<Product/>}></Route>
            
             
            
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
