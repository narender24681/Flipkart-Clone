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
          display: "flex",
          justifyContent: "space-around",
          gap: "15px",
          marginTop: "2px",
        }}
      >
        <div
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            width: "17%",
            height: "600px",
            padding: "10px",
            position: "sticky",
            top: "75px",
          }}
        >
          <LeftSide />
        </div>
        <div
          style={{
            width: "67%",
            height: "1000px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
          }}
        >
          <MiddleSide />
        </div>
        <div
          style={{
            width: "16%",
            height: "600px",
            padding: "10px",
            position: "sticky",
            top: "75px",
            boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
          }}
        >
          <RightSide />
        </div>
      </div>
    </div>
  );
}
