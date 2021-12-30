import { Chart } from "react-google-charts";
import * as React from "react";
import { render } from "react-dom";

const options = {
  title: "USD/TWD Historical Data",
  hAxis: { title: "Month" },
  vAxis: { title: "Price" },
  legend: "none",
};
const data = [
  ["Month", "Price"],
  ["Nov 21", 27.797],
  ["Oct 21", 27.822],
  ["Sep 21", 27.81],
  ["Aug 21", 27.651],
  ["Jul 21", 27.93],
  ["Jun 21", 27.913],
  ["May 21", 27.524],
  ["Apr 21", 27.846],
  ["Mar 21", 28.444],
  ["Feb 21", 27.865],
  ["Jan 21", 28.001],
  ["Dec 20", 28.075],
  ["Nov 20", 28.576],
  ["Oct 20", 28.584],
  ["Sep 20", 28.923],
  ["Aug 20", 29.365],
  ["Jul 20", 29.337],
  ["Jun 20", 29.412],
  ["May 20", 29.444],
  ["Apr 20", 29.776],
  ["Mar 20", 30.268],
  ["Feb 20", 30.122],
  ["Jan 20", 30.346],
];

const GooChart = () => {
  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width="600px"
      height="400px"
      legendToggle
    />
  );
};

export default GooChart;