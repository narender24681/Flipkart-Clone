import React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function AddData() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      // minH={"100vh"}
      mt={"10px"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Image-1</FormLabel>
              <Input placeholder="Enter Image-1" type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Image-2</FormLabel>
              <Input placeholder="Enter Image-2" type="text" />
            </FormControl>
            <FormControl id="text" isRequired>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Enter Title" type="text" />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Enter Name" type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Price</FormLabel>
                  <Input placeholder="Enter Price" type="number" />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <FormControl id="password" isRequired>
                <FormLabel>Brand</FormLabel>
                <InputGroup>
                  <Input placeholder="Enter Brand" type={"text"} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select>
                  <option>Select</option>
                  <option>HEllo</option>
                  <option>HEllo</option>
                  <option>HEllo</option>
                </Select>
              </FormControl>
            </HStack>

            <FormControl id="password" isRequired>
              <FormLabel>Description</FormLabel>
              <InputGroup>
                <Input placeholder="Enter Description" type={"text"} />
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"yellow.400"}
                color={"white"}
                _hover={{
                  bg: "yellow.500",
                }}
              >
                Add Products
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
