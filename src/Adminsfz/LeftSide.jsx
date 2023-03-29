// import React from "react";
// import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";
// export default function LeftSide() {
//   const adminslogo = [
//     {
//       images: "https://bit.ly/sage-adebayo",
//       name: " Segun Adebayo",
//       badges: "New",
//       role: "UI Engineer",
//     },
//     {
//       images: "https://bit.ly/sage-adebayo",
//       name: " Segun Adebayo",
//       badges: "New",
//       role: "UI Engineer",
//     },
//     {
//       images: "https://bit.ly/sage-adebayo",
//       name: " Segun Adebayo",
//       badges: "New",
//       role: "UI Engineer",
//     },
//     {
//       images: "https://bit.ly/sage-adebayo",
//       name: " Segun Adebayo",
//       badges: "New",
//       role: "UI Engineer",
//     },
//     {
//       images: "https://bit.ly/sage-adebayo",
//       name: " Segun Adebayo",
//       badges: "New",
//       role: "UI Engineer",
//     },
//   ];

//   return (
//     <div
//       style={{
//         textAlign: "center",
//       }}
//     >
//       {adminslogo.map((ele) => (
//         <div
//           style={{
//             textAlign: "center",
//             boxShadow:
//               "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
//             justifyContent: "center",
//             marginTop: "15px",
//             padding: "3px",
//           }}
//         >
//           <Flex>
//             <Avatar src="https://bit.ly/sage-adebayo" />
//             <Box ml="3">
//               <Text fontWeight="bold">
//                 Segun Adebayo
//                 <Badge ml="1" colorScheme="green">
//                   New
//                 </Badge>
//               </Text>
//               <Text fontSize="sm">UI Engineer</Text>
//             </Box>
//           </Flex>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { Card } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function LeftSide() {
  return (
    <div>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
      <Card p={"8px"} mt={"10px"}>
        <Text>Hello</Text>
      </Card>
    </div>
  );
}
