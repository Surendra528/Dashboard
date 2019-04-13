import React, { Component } from 'react';

import Chart from "react-google-charts";

const data = [
    ["Geo", "OrderCount", { role: "style" }],
    ["China", 200, "color: skyblue"],
    ["Japan", 150, "color: pink"],
    ["Europe", 250, "color: blue"],
    ["US", 300, "color: green"],
      ];
class Geoorders extends React.Component {

    
  render() {
    return (
        <div className="App">
          <div Style="margin-left: 30px; margin-right:30px">
          <Chart chartType="ColumnChart" width="auto" height="350px" data={data} />
          </div>
        </div>
      );
  }
}

export default Geoorders