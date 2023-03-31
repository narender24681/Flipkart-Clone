import React from "react";
import { Card, useColorModeValue } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { AiFillSetting, AiFillShopping, AiFillSignal } from "react-icons/ai";
import { PhoneIcon, ChatIcon, BellIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
export default function LeftSide() {
  return (
    <div>
      <RouterLink to="/admin-dashboard">
        <Card ml={"10px"} p={"8px"} mt={"10px"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              fontSize: "1.1rem",
            }}
          >
            <div>
              <AiFillSetting />
            </div>
            <Text>Dashboard</Text>
          </div>
        </Card>
      </RouterLink>
      <RouterLink to="/admin-products">
        <Card ml={"10px"} p={"8px"} mt={"10px"}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              fontSize: "1.1rem",
            }}
          >
            <div>
              <AiFillShopping />
            </div>
            <Text>Products</Text>
          </div>
        </Card>
      </RouterLink>

      <Card ml={"10px"} p={"8px"} mt={"10px"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "1.1rem",
          }}
        >
          <AiFillSignal />
          <Text>Data</Text>
        </div>
      </Card>
      <Card ml={"10px"} p={"8px"} mt={"10px"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "1.1rem",
          }}
        >
          <ChatIcon />
          <Text>Message</Text>
        </div>
      </Card>
      <Card ml={"10px"} p={"8px"} mt={"10px"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "1.1rem",
          }}
        >
          <BellIcon />
          <Text>Notification</Text>
        </div>
      </Card>
      <Card ml={"10px"} p={"8px"} mt={"10px"}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontSize: "1.1rem",
          }}
        >
          <AiFillSetting />
          <Text>Setting</Text>
        </div>
      </Card>
    </div>
  );
}
