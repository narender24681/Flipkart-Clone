import React from "react";
import AddData from "./AddData";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import RecordData from "./RecordData";

export default function MiddleSide() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "100%",
        }}
      >
        <Box w={"35%"} h={"100px"} mt={"25px"}>
          <ExtraD />
        </Box>
        <div style={{ width: "65%", height: "100%" }}>
          <AddData />
        </div>
      </div>
      <div>
        <RecordData />
      </div>
    </div>
  );
}

function ExtraD() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(1-fill, minmax(100px, 1fr))"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> Transaction History</Heading>
        </CardHeader>
        <CardBody display={"flex"}>
          <Image
            width={"50%"}
            src="https://user-images.githubusercontent.com/106812942/228527708-055feca2-d75e-4aab-8bdd-07a9fe0352e0.png"
          />
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
      <Card>
        <StatGroup>
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              9.05%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Card>
      <Card>
        <StatGroup>
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>66,670</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              39.36%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>12</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              14.36%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Card>
      <Card>
        <StatGroup>
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>192,236</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              89.66%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>32</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              22.35%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Card>
      <Card>
        <StatGroup>
          <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>155.360</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              33.33%
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>66</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              03.01%
            </StatHelpText>
          </Stat>
        </StatGroup>
      </Card>
    </SimpleGrid>
  );
}
