import React, { Component } from 'react'
import Chart from "react-google-charts";
const data = [
    ["Country", "View %", { role: "style" }],
    ["US", 100, "color: skyblue"],
    ["EMEA", 50, "color: pink"],
    ["China", 25, "color: blue"],
    ["Japan", 30, "color: green"],
    ["GE Countries", 60, "color: amber"],
      ];
 class IncompleteOrder extends Component {
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

export default IncompleteOrder;