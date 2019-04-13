import React, { Component } from 'react'

import AllgeoOC from './AllgeoOC'

import Geoorders from './GeowiseOrders'
 class Ordertrend extends Component {
  render() {
    return (
      <div>
          
        <div class="IL1 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1); float:left; ">Total Order Trend <AllgeoOC/> </div>
<div class="IL2 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1);float:center ">Order Trend by Region < Geoorders /> </div>

      </div>
    )
  }
  
}

export default Ordertrend;