import React, { Component } from 'react'
import Chart from "react-google-charts";
const data = [
    ["BRAND", "View %", { role: "style" }],
    ["Nike", 500, "color: skyblue"],
    ["Jordan", 150, "color: pink"],
    ["Hurley", 250, "color: blue"],
    ["Conveerse", 300, "color: green"],
      ];
 class ProductViews extends Component {
  render() {
    return (
      <div>
          <div Style="margin-left: 30px; margin-right: 30px">
              
         <Chart chartType="PieChart" margin="120px" width="auto" height="150px"  data={data} />
         
         </div>
      </div>
    )
  }
}

export default ProductViews