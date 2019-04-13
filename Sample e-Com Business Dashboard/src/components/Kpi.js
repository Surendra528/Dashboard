import React, { Component } from 'react';
import Checkoutchart from './CheckoutChart'

import ProductViews from './ProductViews'

import IncompleteOrder from './IncompleteOrder'

class Kpi extends Component {
  render() {
    return (
      <div>
        <div class="IM1 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1); float:left; ">Total Product Views <ProductViews/> </div>
   <div class="IM2 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1);float:center ">Checkout rate <Checkoutchart /> </div>
   <div class="IM3 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1);float:center ">Incomplete Orders rate <IncompleteOrder /></div>
      </div>
    )
  }
}

export default  Kpi