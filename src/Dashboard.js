import React, { useEffect, useState } from "react";
import BarChart from "./Bargraph";
import App1 from "./PieChart";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  //   const colors = ['#d87a80', '#ffb980', '#b6a2de', '#2ec7c9'];

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://greenstitch-phmf.onrender.com/api/percentage"
      ); // replace with your API endpoint

      // setData1(data);
      setData(response.data);

      console.log("haaaaaaaa", response.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await axios.get(
        "https://greenstitch-phmf.onrender.com/api/emission"
      ); // replace with your API endpoint

      // setData1(data);
      setData1(response.data);

      console.log("haaaaaaaa", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="das1">
      <div className="dashboard">
        {data.map((item, index) => {
          return (
            <div key={index} className="card1">
              <p className="value1">{item.name}</p>
              <p className="value2">{item.value}t</p>
              <p className="value3">{item.composition}</p>
              <div className="value4">{item.percentage}%</div>
            </div>
          );
        })}
      </div>
      <div className="dashboard">
        {" "}
        <div className="card2">
          <div
            className="dashboard"
            style={{ justifyContent: "space-between", marginBottom: "20px" }}
          >
            <h1
              style={{
                font: "inter",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "24px",
                letterSpacing: "-2%",
              }}
            >
              Carbon FootPrint
            </h1>
            <div style={{ display: "flex" }}>
              {}
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
                    backgroundColor: "rgba(87, 204, 120, 1)",
                    borderRadius: "100px",
                    height: "10px",
                    width: "10px",
                    marginRight: "5px",
                  }}
                ></div>
                <div
                  style={{ fontSize: "12px", fontWeight: "600", font: "inter" }}
                >
                  Spinning
                </div>
              </div>
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
                    backgroundColor: "rgba(85, 219, 219, 1)",
                    borderRadius: "100px",
                    height: "10px",
                    width: "10px",
                    marginRight: "5px",
                  }}
                ></div>
                <div
                  style={{ fontSize: "12px", fontWeight: "600", font: "inter" }}
                >
                  Transportation
                </div>
              </div>
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
                    backgroundColor: "rgba(226, 255, 50, 1)",
                    borderRadius: "100px",
                    height: "10px",
                    width: "10px",
                    marginRight: "5px",
                  }}
                ></div>
                <div
                  style={{ fontSize: "12px", fontWeight: "600", font: "inter" }}
                >
                  Carding
                </div>
              </div>
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
                    backgroundColor: "rgba(254, 193, 2, 1)",
                    borderRadius: "100px",
                    height: "10px",
                    width: "10px",
                    marginRight: "5px",
                  }}
                ></div>
                <div
                  style={{ fontSize: "12px", fontWeight: "600", font: "inter" }}
                >
                  Health & Cooling
                </div>
              </div>
              <div
                style={{
                  width: "36.44px",
                  height: "36.54px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(244, 247, 254, 1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/vector1.png" />
              </div>
            </div>
          </div>
          <BarChart title="My Bar Chart" />
        </div>
        <App1 />
      </div>
    </div>
  );
};

export default Dashboard;
