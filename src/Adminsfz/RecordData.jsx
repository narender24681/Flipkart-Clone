import { Card, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function RecordData() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        marginTop: "30px",
        gap: "30px",
      }}
    >
      <Card
        textAlign={"start"}
        p={"20px"}
        bg={useColorModeValue("#1a202c", "grey.1")}
      >
        <Text>Line Chart</Text>
        <Image src="https://user-images.githubusercontent.com/106812942/228759682-e52ed4d8-e327-4d5b-9166-4cbb60a3dbac.png" />
      </Card>
      <Card
        textAlign={"start"}
        p={"20px"}
        bg={useColorModeValue("#1a202c", "grey.1")}
      >
        <Text>Area Chart</Text>
        <Image src="https://user-images.githubusercontent.com/106812942/228759695-1111fd90-263d-4f25-b993-081d629869b2.png" />
      </Card>
      <Card
        textAlign={"start"}
        p={"20px"}
        bg={useColorModeValue("#1a202c", "grey.1")}
      >
        <Text> Bar Chart</Text>
        <Image src="https://user-images.githubusercontent.com/106812942/228759715-498fb2fe-452b-4218-94da-4e3d32ad22a6.png" />
      </Card>
      <Card
        textAlign={"start"}
        p={"20px"}
        bg={useColorModeValue("#1a202c", "grey.1")}
      >
        <Text>Doughnut Chart</Text>
        <Image src="https://user-images.githubusercontent.com/106812942/228759704-54083f71-0949-4138-aa5e-fa8c47cfbedc.png" />
      </Card>
      <Card
        textAlign={"start"}
        p={"20px"}
        bg={useColorModeValue("#1a202c", "grey.1")}
      >
        <Text>Scatter Chart</Text>
        <Image src="https://user-images.githubusercontent.com/106812942/228759707-463edec4-1152-44ee-94fc-ee2fdc1e8fb8.png" />
      </Card>
      <Card
        textAlign={"start"}
        p={"20px"}
        bg={useColorModeValue("#1a202c", "grey.1")}
      >
        <Text>Pie Chart</Text>
        <Image src="https://user-images.githubusercontent.com/106812942/228759701-0f584238-57ea-4cd0-bb34-f604be24f469.png" />
      </Card>
    </div>
  );
}
