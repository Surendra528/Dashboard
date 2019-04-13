import React, { Component } from 'react'

 class Revenue extends Component {
  render() {
    return (
      <div>
         <div Style="height: 40px; background-color: rgba(255,0,0,0.1);"> </div>
            <div class="In1 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1); float:left; ">Total Revenue
            <br></br><h2 className="revenue">USD 1000M</h2>
            </div>
            <div class="In2 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1);float:center ">Revenue from US
            <br></br><h2 className="revenue">USD 400M</h2>
            </div>
            <div class="In3 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1)">Revenue from EUROPE
            <br></br><h2 className="revenue">USD 350M</h2>
            </div>
            <div class="In4 h-100 d-inline-block" Style="width: 120px; background-color: rgba(0,0,255,.1)">Revenue from Other Geos
            <br></br><h2 className="revenue">USD 250M</h2>
            </div>
      </div>
    )
  }
}
export default Revenue
