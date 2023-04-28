import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import React, { useState } from "react";

const SideBar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
  };
  const toggleSubMenu2 = () => {
    setIsSubMenuOpen2(!isSubMenuOpen2);
  };

  return (
    <div className="sidebar" style={{ position: "relative" }}>
      <div className="logo">
        <img src="/logo.png"></img>
      </div>

      <div className="sections">D A S H B O A R D</div>

      <div>
        <div className="dropdown">
          {/* <DropdownMenu/> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15px", height: "13px", marginRight: "5px" }}>
              <img src="./images/vector/Elements/Icon/Vector.png" />
            </div>

            <p
              className="sidebarel"
              style={{
                font: "inter",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Dashboard
            </p>
          </div>
          <Icon
            as={isSubMenuOpen ? ChevronUpIcon : ChevronDownIcon}
            onClick={toggleSubMenu}
          />
        </div>
        <div style={{ width: "60%", margin: "auto" }}>
          {isSubMenuOpen && (
            <ul style={{ listStyleType: "none" }}>
              <li className="listitem">
                <a href="#settings">Record</a>
              </li>
              <li className="listitem">
                <a href="#settings">Reports</a>
              </li>
              <li className="listitem">
                <a href="#settings">Analyse</a>
              </li>
              <li className="listitem">
                <a href="#settings">Learn</a>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="sections">P A G E S</div>

      <div>
        <div className="dropdown">
          {/* <DropdownMenu/> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15px", height: "13px", marginRight: "5px" }}>
              <img src="./images/help/Elements/Icon/Vector.png" />
            </div>

            <p
              className="sidebarel"
              style={{
                font: "inter",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Help Center
            </p>
          </div>
          <Icon
            as={isSubMenuOpen1 ? ChevronUpIcon : ChevronDownIcon}
            onClick={toggleSubMenu1}
          />
        </div>
        <div
          style={{ width: "70%", margin: "auto", backgroundColor: "yellow" }}
        ></div>
      </div>
      <div>
        <div className="dropdown">
          {/* <DropdownMenu/> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "15px", height: "13px", marginRight: "5px" }}>
              <img src="./images/filenmanag/Elements/Icon/Vector.png" />
            </div>

            <p
              className="sidebarel"
              style={{
                font: "inter",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              File Manager
            </p>
          </div>
          <Icon
            as={isSubMenuOpen2 ? ChevronUpIcon : ChevronDownIcon}
            onClick={toggleSubMenu2}
          />
        </div>
        <div
          style={{ width: "70%", margin: "auto", backgroundColor: "yellow" }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          borderTop: "1px rgba(0, 0, 0, 0.11) solid",
          width: "100%",
          height: "50px",
          bottom: "0",
          position: "absolute",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div>
          <img src="/bla.png"></img>
        </div>
        <div>
          <img src="./Icon/Union.png"></img>
        </div>
        <div>
          <img src="/globe.png"></img>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
