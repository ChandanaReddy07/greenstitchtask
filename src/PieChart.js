import React, { useEffect, useState } from "react";
import axios from "axios";

function PieChart(props) {
  const { data, colors } = props;
  const SCALE = 0.1;

  console.log("numnerr", data);

  const total = 100;

  console.log("perc", total);

  const percentage = data.map((num) => (total ? num.value / total : 0));

  const radius = 60;
  const strokeWidth = 18;
  const center = (radius + strokeWidth / 2) * (1 + 2 * SCALE);
  const circumference = 2 * radius * Math.PI;

  const handleMouseenter = (index) => {
    const diff = ((radius - strokeWidth / 2) * SCALE) / (1 + SCALE);
    const width = diff * 2 + strokeWidth;
    const circle = document.getElementById(`circle${index}`);
    if (circle) {
      circle.style.cssText = `
        opacity: 0.8;
        stroke-width: ${width};
        transform: scale(${1 + SCALE});
      `;
    }
    setTemp(`${(percentage[index] * 100).toFixed(2)}%`);
  };

  const handleMouseleave = (index) => {
    const circle = document.getElementById(`circle${index}`);
    if (circle) {
      circle.style.cssText = "";
    }
    setTemp("");
  };

  const [temp, setTemp] = React.useState("");

  return (
    <div>
      <div className="total">
        <div
          style={{
            font: "inter",
            weight: "700",
            fontSize: "22px",
            lineHeight: "22px",
            letterSpacing: "-2%",
            textAlign: "center",
            color: "black",
          }}
        >
          Top emissions by type
        </div>
      </div>
      <div className="pie-chart">
        <svg
          viewBox={`0 0 ${center * 2} ${center * 2}`}
          style={{ height: `${center * 2}px`, width: `${center * 2}px` }}
        >
          <circle
            style={{ display: !total ? "block" : "none" }}
            fill="none"
            cx={center}
            cy={center}
            r={radius}
            stroke="#e5e9f2"
            strokeWidth={strokeWidth}
          />
          {data.map((num, index) => {
            const p = total ? num.value / total : 0;

            return (
              <circle
                key={index}
                id={`circle${index}`}
                fill="none"
                cx={center}
                cy={center}
                r={radius}
                stroke={num.color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={`${p * circumference}px ${circumference}px`}
                strokeDashoffset={`${
                  -percentage
                    .slice(0, index)
                    .reduce((prev, cur) => prev + cur, 0) * circumference
                }px`}
                onMouseEnter={() => handleMouseenter(index)}
                onMouseLeave={() => handleMouseleave(index)}
              />
            );
          })}
        </svg>
        <div className={`temp-item ${temp ? "has-value" : ""}`}>{temp}</div>
      </div>
      <div style={{ width: "180px", margin: "auto", padding: "0" }}>
        {data.map((n, index) => (
          // {console.log(n)}
          <div
            key={index}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: `${n.color}`,
                  borderRadius: "100px",
                  height: "10px",
                  width: "10px",
                  marginRight: "5px",
                }}
              ></div>
              <div
                style={{ fontSize: "12px", fontWeight: "600", font: "inter" }}
              >
                {n.name}
              </div>
            </div>
            <div>{n.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App1() {
  const [data, setData] = useState([]);

  const colors = ["#d87a80", "#ffb980", "#b6a2de", "#2ec7c9"];

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://greenstitch-phmf.onrender.com/api/emission"
      ); // replace with your API endpoint

      // setData1(data);
      setData(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <PieChart data={data} colors={colors} />
    </div>
  );
}

export default App1;
