import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './Revenue'
import "bootstrap/dist/css/bootstrap.css";
import Revenue from './Revenue';
import Kpi from './Kpi';
import Orders from './Ordertrend';
import Geoorders from './GeowiseOrders'
import { DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';

import  ProductViews from './ProductViews'


class App extends Component {
constructor(props){
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
    dropdownOpen: false
  };
}

toggle() {
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  }));
}

render() {
    return (
      <div className="App">
         <div className="bg-success text-red bolder" Style="margin-top: -120px; font-size='1000px'">
           <h1>NIKE Business Dashboard</h1> 
          </div>
          <div  id="nave" Style="margin-top: -10px;">
         <h5>
                  <span class="badge badge-secondary" id="badge">Annual Summary</span>
        
        <span className="user">Hi, Surendra</span> </h5>
            </div>
           
       <div className="dropdown" id="Dropdown" >
       <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Select-Year
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value="1">2018</DropdownItem>
          <DropdownItem>2017</DropdownItem>
          <DropdownItem>2016</DropdownItem>
          <DropdownItem>2015</DropdownItem>
        </DropdownMenu>
      </Dropdown>
                     </div>   
             <Revenue />
             <Kpi /> 
             <Orders />
          
              </div>

   );
  }
}

export default App;