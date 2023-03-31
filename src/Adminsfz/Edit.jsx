import React, { useState, useEffct } from "react";
import { useDispatch } from "react-redux";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  useColorModeValue,
  Select,
} from "@chakra-ui/react";
import { addProducstData } from "../Redux/AdminReducer/action";

export default function Edit() {
  return (
    <Flex
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
              <Input
                placeholder="Enter Image-1"
                type="text"
                name="image1"
                isRequired
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Image-2</FormLabel>
              <Input
                placeholder="Enter Image-2"
                type="text"
                name="image2"
                isRequired
              />
            </FormControl>
            <FormControl id="text" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Enter Title"
                type="text"
                name="title"
                isRequired
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="Enter Name"
                    type="text"
                    name="name"
                    isRequired
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Enter Price"
                    type="number"
                    name="price"
                    isRequired
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <FormControl id="password" isRequired>
                <FormLabel>Brand</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Enter Brand"
                    type={"text"}
                    name="brand"
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select name="category" isRequired>
                  <option>Select</option>
                  <option>Mens</option>
                  <option>Womens</option>
                  <option>Kids</option>
                  <option>Electronics</option>
                </Select>
              </FormControl>
            </HStack>

            <FormControl id="password" isRequired>
              <FormLabel>Description</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter Description"
                  type={"text"}
                  isRequired
                />
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
