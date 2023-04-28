import React, { useEffect, useState } from "react";
import "./BarChart.css";
import axios from "axios";

const BarChart = () => {
  const colorArray = [
    "rgba(254, 193, 2, 1) ",
    "rgba(226, 255, 50, 1)",
    "rgba(85, 219, 219, 1) ",
    " rgba(87, 204, 120, 1)",
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://greenstitch-phmf.onrender.com/api/bardata"
      ); // replace with your API endpoint

      // setData1(data);
      setData(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const yTicks = [50000, 100000, 150000, 200000, 250000, 300000];
  const yTickLabels = yTicks.map((tick) => `${tick / 1000}K`);

  const xTicks = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

  return (
    <div className="bar-chart">
      <div className="y-axis">
        {yTickLabels
          .slice()
          .reverse()
          .map((label, index) => (
            <div className="y-tick" key={index}>
              {label}
            </div>
          ))}
      </div>
      <div className="bars">
        {data.map((bar, index) => (
          <div className="bar" key={index}>
            {bar.values.map((value, index) => (
              <div
                className={`bar-segment ${index === 0 ? "curved-tip" : ""}`}
                key={index}
                style={{
                  height: `${(value / yTicks[yTicks.length - 1]) * 100}%`,
                  backgroundColor: colorArray[index],
                }}
              ></div>
            ))}
          </div>
        ))}
        <div className="x-axis">
          {xTicks.map((label, index) => (
            <div className="x-tick" key={index}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
