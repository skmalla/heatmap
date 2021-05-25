import React from "react";
import Highcharts from "highcharts/highmaps";
import { Link } from "react-router-dom";
import Chart from "./HeatMapDownLoad";
require("highcharts/modules/exporting")(Highcharts);

const chartOptions = {
  chart: {
    type: "heatmap",
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1,
    backgroundColor: "#eef0f6",
  },

  title: {
    text: "Risk Control Self Acessment",
    style: {
      color: "#000000",
    },
  },

  xAxis: {
    categories: ["Rare", "UnLikely", "Possible", "Likely", "Almost Certain"],
    title: {
      text: "Likelyhood",
    },
  },

  yAxis: {
    categories: ["insignificant", "minor", "Moderate", "Major", "Critical"],
    title: {
      text: "Impact",
    },
  },

  tooltip: {
    backgroundColor: "#333333",
    borderRadius: "20",
    followPointer: true,
    style: {
      color: "#ffffff",
      fontWeight: "normal",
    },
  },

  series: [
    {
      name: "Risk Control Self Acessment",

      data: [
        {
          x: 0,
          y: 0,
          color: "green",
          value: "-30,5",
        },
        {
          x: 0,
          y: 1,
          color: "yellow",
          value: 30,
        },
        {
          x: 0,
          y: 2,
          color: "blue",
          value: 70,
        },
        {
          x: 0,
          y: 3,
          color: "brown",
          value: 60,
        },
        {
          x: 0,
          y: 4,
          color: "grey",
          value: 50000000,
        },

        {
          x: 1,
          y: 0,
          color: "salmon",
          value: 45,
        },
        {
          x: 1,
          y: 1,
          color: "grey",
          value: 38,
        },
        {
          x: 1,
          y: 2,
          color: "pink",
          value: 67,
        },
        {
          x: 1,
          y: 3,
          color: "violet",
          value: 45,
        },
        {
          x: 1,
          y: 4,
          color: "goldenrod",
          value: 65,
        },

        {
          x: 2,
          y: 0,
          color: "skyblue",
          value: 67,
        },
        {
          x: 2,
          y: 1,
          color: "lightgreen",
          value: 67,
        },
        {
          x: 2,
          y: 2,
          color: "grey",
          value: 67,
        },
        {
          x: 2,
          y: 3,
          color: "orange",
          value: 67,
        },
        {
          x: 2,
          y: 4,
          color: "red",
          value: 67,
        },

        {
          x: 3,
          y: 0,
          color: "lightgrey",
          value: 67,
        },
        {
          x: 3,
          y: 1,
          color: "#eee",
          value: 67,
        },
        {
          x: 3,
          y: 2,
          color: "lightpink",
          value: 25,
          value: 67,
        },
        {
          x: 3,
          y: 3,
          color: "red",
          value: 25,
        },
        {
          x: 3,
          y: 4,
          color: "pink",
          value: 25,
        },

        {
          x: 4,
          y: 0,
          color: "green",
          value: 688887,
          id: "c0",
        },
        {
          x: 4,
          y: 1,
          color: "blue",
          value: 67,
        },
        {
          x: 4,
          y: 2,
          color: "green",
          value: 10,
        },
        {
          x: 4,
          y: 3,
          color: "yellow",
          value: 10,
        },
        {
          x: 4,
          y: 4,
          color: "salmon",
          value: 10,
        },
      ],
      dataLabels: {
        enabled: true,
        color: "#000000",
      },
    },
  ],
};

const HeatMap = () => (
  <div>
    <div className='text-right'>
      <Link to='/HeatMapConfiguration'>
        <button className='createBtn'>Configure</button>
      </Link>
    </div>
    <Chart options={chartOptions} highcharts={Highcharts} />
  </div>
);

export default HeatMap;
