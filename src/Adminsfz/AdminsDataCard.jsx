import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function AdminsDataCard({ image1, brand, id, price, name, category }) {
  return (
    <Card style={{ marginTop: "5px", display: "flex" }}>
      <div style={{ display: "flex" }}>
        <Image w={"8%"} h={"8%"} src={image1} />
      </div>
      <Table>
        <Tbody>
          <Tr>
            <Td>{/* <Image w={"8%"} h={"8%"} src={image1} /> */}</Td>
            <Td>
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
              <RouterLink to={`/edit/${id}`}>
                <Button>
                  <EditIcon w={7} h={7} color="green" />
                </Button>
              </RouterLink>
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
