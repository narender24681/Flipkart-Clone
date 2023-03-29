import React from "react";
import { Avatar, Badge, Box, Card, Flex, Image, Text } from "@chakra-ui/react";
export default function RightSide() {
  const adminslogo = [
    {
      images: "https://bit.ly/sage-adebayo",
      name: "Narender Chepuri",
      badges: "New",
      role: "Home page Creator",
    },
    {
      images: "https://avatars.githubusercontent.com/u/106812942?s=64&v=4",
      name: "Md Faizan",
      badges: "New",
      role: "Admin Panel Creator",
    },
    {
      images:
        "https://ca.slack-edge.com/T04QH584W4W-U04R9KWMT8D-ed1e7ceeb760-512",
      name: "Sumit Kolipyaka",
      badges: "New",
      role: "Products Creator",
    },
    {
      images:
        "https://ca.slack-edge.com/T04QH584W4W-U04S114LR5E-f02af4850ef5-72",
      name: "Supriya Shahoo",
      badges: "New",
      role: "UI Engineer Creator",
    },
    {
      images:
        "https://ca.slack-edge.com/T04QH584W4W-U04RB8C23NF-6a7f27ecfe56-512",
      name: "Rajat Agarwal",
      badges: "New",
      role: "UI Engineer Creator",
    },
  ];

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {adminslogo.map((ele) => (
        <div
          style={{
            textAlign: "center",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            justifyContent: "center",
            marginTop: "15px",
            padding: "3px",
            borderRadius: "10px",
            border: "0.5px solid grey",
          }}
        >
          <Flex>
            <Avatar src={ele.images} />
            <Box ml="3">
              <Text fontWeight="bold">{ele.name}</Text>
              <Text fontSize="sm">{ele.role}</Text>
            </Box>
          </Flex>
        </div>
      ))}
      <Box
        mt={"20px"}
        boxShadow={
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        }
      >
        <Image
          width={"100%"}
          src="https://user-images.githubusercontent.com/106812942/228527708-055feca2-d75e-4aab-8bdd-07a9fe0352e0.png"
        />
      </Box>
    </div>
  );
}
