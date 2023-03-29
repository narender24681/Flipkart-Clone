import React from "react";
import AdminsNav from "./AdminsNav";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";
import { Box } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <div>
      <Box bg={"yellow"} color={"black"} fontFamily={"cursive"}>
        An in-depth guide on admin panel requirements and development.
        Comprehensive guidelines, useful design tips, key features, best
        practices.🌹🌹
      </Box>
      <AdminsNav />
      <div
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ border: "1px solid grey", width: "18%" }}>
          <LeftSide />
        </div>
        <div style={{ border: "1px solid grey", width: "67%" }}>
          <MiddleSide />
        </div>
        <div style={{ border: "1px solid grey", width: "15%" }}>
          <RightSide />
        </div>
      </div>
    </div>
  );
}
