import React, { useState, useEffct } from "react";

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
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Edit() {
  const { id } = useParams();
  const [data, setData] = useState({});
  // console.log(id);
  const products = useSelector((store) => store.adminsReduer.electronics);
  // console.log(products);

  // const handleChange = (e) => {
  // const { name, value } = e.target;
  // console.log(name, value);
  // };

  useEffect(() => {
    const pdata = products.find((ele) => ele.id === +id);
    // console.log(pdata);
    setData(pdata);
    //   // console.log(id);;
  }, []);
  console.log(data);

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
                // onChange={handleChange}
                // value={data.image1}
                isRequired
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Image-2</FormLabel>
              <Input
                placeholder="Enter Image-2"
                type="text"
                name="image2"
                // onChange={handleChange}
                // value={data.image2}
                isRequired
              />
            </FormControl>
            <FormControl id="text" isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                placeholder="Enter Title"
                type="text"
                name="title"
                // onChange={handleChange}
                // value={data.title}
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
                    // onChange={handleChange}
                    // value={data.name}
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
                    // onChange={handleChange}
                    // value={data.price}
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
                    // onChange={handleChange}
                    // value={data.brand}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>

                <Select
                  name="category"
                  // onChange={handleChange}
                  // value={data.category}
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
                  // onChange={handleChange}
                  // value={data.description}
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
