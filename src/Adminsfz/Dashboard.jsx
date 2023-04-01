import React from "react";
import AdminsNav from "./AdminsNav";
import LeftSide from "./LeftSide";
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";
import { Box, useColorModeValue } from "@chakra-ui/react";

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
        <Box
          bg={useColorModeValue("#2874f0", "blue.200")}
          width={"17%"}
          h={"89vh"}
          p={"10px"}
          position={"sticky"}
          top={"71px"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
        >
          <LeftSide />
        </Box>
        <Box
          // bg={useColorModeValue("blue.100", "blue.700")}
          width={"67%"}
          h={"100%"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
        >
          <MiddleSide />
        </Box>
        <Box
          bg={useColorModeValue("#ecc94b", "#ecc94b")}
          width={"16%"}
          h={"89vh"}
          p={"10px"}
          position={"sticky"}
          top={"75px"}
          boxShadow={
            "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
          }
        >
          <RightSide />
        </Box>
      </div>
    </div>
  );
}
