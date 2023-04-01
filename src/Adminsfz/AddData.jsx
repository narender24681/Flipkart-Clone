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
const initialState = {
  image1: "",
  image2: "",
  title: "",
  price: "₹",
  name: "",
  brand: "",
  category: "",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
};
export default function AddData() {
  const [adData, setAddData] = useState(initialState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducstData(adData));
    console.log(adData);
    setAddData(initialState);
  };
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
                onChange={(e) => handleChange(e)}
                value={adData.image1}
                isRequired
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Image-2</FormLabel>
              <Input
                placeholder="Enter Image-2"
                type="text"
                name="image2"
                onChange={(e) => handleChange(e)}
                value={adData.image2}
                isRequired
              />
            </FormControl>
            <FormControl id="text" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Enter Title"
                type="text"
                name="title"
                onChange={(e) => handleChange(e)}
                value={adData.title}
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
                    onChange={(e) => handleChange(e)}
                    value={adData.name}
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
                    onChange={(e) => handleChange(e)}
                    value={adData.price}
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
                    onChange={(e) => handleChange(e)}
                    value={adData.brand}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  name="category"
                  onChange={(e) => handleChange(e)}
                  value={adData.category}
                  isRequired
                >
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
                  onChange={(e) => handleChange(e)}
                  value={adData.description}
                  isRequired
                />
              </InputGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={"orange.400"}
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
