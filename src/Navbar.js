import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ margin: "10px 32px", width: "70%" }}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.800" />}
          />
          <Input type="tel" placeholder="Search.." />
        </InputGroup>
      </div>

      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="sidebarel2">
          <img src="./images/Vector.png"></img>
        </div>
        <div className="sidebarel2">
          <img src="./images/Union.png"></img>
        </div>
        <div className="sidebarel2">
          <img src="./images/Icon/Union.png"></img>
        </div>
        <div>
          <img src="./Paste image.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
