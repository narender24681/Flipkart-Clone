import React from "react";
import {
  Button,
  Card,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  DeleteIcon,
  EditIcon,
} from "@chakra-ui/icons";

function AdminsDataCard({ image1, brand, title, price, name, category }) {
  return (
    <Card style={{ marginTop: "5px", display: "flex" }}>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "10%", border: "1px solid grey" }}>
          <img style={{ width: "100%" }} src={image1} />
        </div>

        <div style={{ border: "1px solid grey" }}>
          <Text>₹ {price}</Text>
          <Text> {brand} </Text>
        </div>
        <div style={{ border: "1px solid grey" }}>
          <Text>₹ {price}</Text>
          <Text color={"red"}> {name} </Text>
        </div>
        <div
          style={{
            display: "flex",
            width: "12%",
            justifyContent: "space-between",
            border: "1px solid grey",
          }}
        >
          <Button>
            <EditIcon w={7} h={7} color="green" />
          </Button>
          <Button>
            <DeleteIcon w={7} h={7} color="red" />
          </Button>
        </div>
      </div> */}
      <div style={{ display: "flex" }}>
        <Image border={"1px solid grey"} w={"8%"} src={image1} />
      </div>
      <Table>
        <Tbody>
          <Tr>
            <Td></Td>
            <Td>
              {/* <Text> {title.substring(0, 20)} </Text> */}
              <Text> {name} </Text>
            </Td>

            <Td>
              <Text> {price} </Text>
            </Td>
            <Td>
              <Text> {brand} </Text>
            </Td>
            <Td>
              <Text> {category} </Text>
            </Td>
            <Td>
              <Button>
                <EditIcon w={7} h={7} color="green" />
              </Button>
            </Td>
            <Td>
              <Button>
                <DeleteIcon w={7} h={7} color="red" />
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <div></div>
    </Card>
  );
}

export default AdminsDataCard;
