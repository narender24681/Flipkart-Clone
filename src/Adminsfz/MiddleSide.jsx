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
  SimpleGrid,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

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
      <Divider />
      <div>
        <h1>All Products Will Be There...</h1>
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
        <CardBody>
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
    </SimpleGrid>
  );
}
