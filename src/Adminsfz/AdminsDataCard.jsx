import React from "react";
import { Card } from "@chakra-ui/react";
function AdminsDataCard({ image1 }) {
  return (
    <Card style={{ marginTop: "5px" }}>
      <img style={{ width: "10%" }} src={image1} />
    </Card>
  );
}

export default AdminsDataCard;
