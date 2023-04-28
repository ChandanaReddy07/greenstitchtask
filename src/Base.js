import React from "react";
import SideBar from "./sidebar";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Base = () => {
  return (
    <div className="base">
      <div>
        <SideBar />
      </div>

      <div>
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
};

export default Base;
