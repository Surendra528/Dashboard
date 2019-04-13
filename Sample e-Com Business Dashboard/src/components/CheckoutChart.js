import React, { Component } from 'react';
import Chart from "react-google-charts";
const data = [
    ["Country", "View %", { role: "style" }],
    ["US", 500, "color: skyblue"],
    ["EMEA", 150, "color: pink"],
    ["China", 250, "color: blue"],
    ["Japan", 300, "color: green"],
    ["GE Countries", 300, "color: amber"],
      ];
 class CheckoutChart extends Component {
  render() {
    return (
      <div>
           <div Style="margin-left: 30px; margin-right:30px">
         <Chart chartType="ColumnChart" width="auto" height="150px" data={data} />
         </div>
      </div>
    )
  }
}

export default CheckoutChart