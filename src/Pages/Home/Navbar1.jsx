import { ChevronDownIcon, Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Box, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Heading, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Text, useBreakpointValue, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaAdversal, FaBars, FaBell, FaBitcoin, FaCartPlus, FaDownload, FaGift, FaGifts, FaHeart, FaQuestion, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const Navbar1 = () => {
    const isSmallScreen = useBreakpointValue({
        base: true,
        md: false
    });

    return (
        <>
            <Center bg="#2874f0" >
                <Box width={{ base: "100%", md: "1080px" }} pt={2} pb={2}>
                    {isSmallScreen ? <SmallScreenNavbarItems /> : <MediumAndLargeScreenNavbarItems />}
                </Box>
            </Center>

            <FooterBottom />
        </>
    )
}

function SmallScreenNavbarItems() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Flex ml={5} mr={5} alignItems="center" justifyContent="space-between">
            <Logo />

            <IconButton
                ref={btnRef}
                backgroundColor="#2874f0"
                color="white"
                icon={<FaBars />}
                onClick={onOpen} />

            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody mt={9} mb={4}>
                        <Center>

                            <VStack>
                                <Searchbar />

                                <Text fontSize="md" fontWeight="600">My Account</Text>
                                <Divider />
                                <Text fontSize="md" fontWeight="600">Become a Seller</Text>
                                <Divider />
                                <Link to="/cart">
                                    <HStack>
                                        <FaShoppingCart />
                                        <Text fontSize="md" fontWeight="600">Cart</Text>
                                    </HStack>
                                </Link>
                                <Divider />
                                <Text fontSize="md" fontWeight="600">More</Text>
                            </VStack>
                        </Center>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

function MediumAndLargeScreenNavbarItems() {
    return (
        <Flex alignItems="center" justifyContent="space-evenly">
            <Link to="/">
                <Logo />
            </Link>

            <Searchbar />

            <Menu>
                <MenuButton _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white" as={Text} rightIcon={<ChevronDownIcon color="red" />}>
                    My Account
                    <ChevronDownIcon />
                </MenuButton>
                <MenuList borderRadius="none">
                    <MenuItem icon={<FaUserCircle color="#2874f0" />}>
                        My Profile
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaBitcoin color="#2874f0" />}>
                        SuperCoin Zone
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaStar color="#2874f0" />}>
                        Flipkart Plus Zone
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaCartPlus color="#2874f0" />}>
                        Orders
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaHeart color="#2874f0" />}>
                        Wishlist
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaGift color="#2874f0" />}>
                        Coupons
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaGifts color="#2874f0" />}>
                        Gift Cards
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaBell color="#2874f0" />}>
                        Notifications
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FiLogOut color="#2874f0" />}>
                        Logout
                    </MenuItem>
                </MenuList>
            </Menu>

            <Text display={{ md: "none", lg: "block" }} _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white">Become a Seller</Text>

            <Menu>
                <MenuButton _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white" as={Text} rightIcon={<ChevronDownIcon color="red" />}>
                    More
                    <ChevronDownIcon />
                </MenuButton>
                <MenuList borderRadius="none">
                    <MenuItem icon={<FaBell color="#2874f0" />}>
                        Notification Preferences
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaQuestion color="#2874f0" />}>
                        24x7 Customer Care
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaAdversal color="#2874f0" />}>
                        Advertise
                    </MenuItem>
                    <Divider />
                    <MenuItem icon={<FaDownload color="#2874f0" />}>
                        Downnload App
                    </MenuItem>
                </MenuList>
            </Menu>

            <Link to="/cart">
                <HStack>
                    <FaShoppingCart color="white" />
                    <Text fontSize="md" fontWeight="600" color="white">Cart</Text>
                </HStack>
            </Link>
        </Flex>
    )
}

function Logo() {
    return (
        <VStack mb={-2}>
            <Heading color="white" as="h4" size="md" mb="-3">SmileKart</Heading>
            <Text color="#ffe500" fontSize="10px" fontWeight="bold" fontStyle="italic" pr={2}>EASY SHOPPING</Text>
            <HStack>
                <StarIcon color="#ffe500" h="2" mt={-10} ml={20} />
            </HStack>
        </VStack>
    )
}

function Searchbar() {
    return (
        <InputGroup size="sm"
            w={{ base: "300px", md: "300px", lg: "350px" }}>
            <Input
                bg="white"
                type="search"
                borderColor="grey"
                placeholder="Search for products, brands and more"
                _placeholder={{ opacity: 0.7, color: "grey" }} />
            <InputRightElement _hover={{ cursor: "pointer" }} children={<Search2Icon color="#2874f0" />} />
        </InputGroup>
    )
}

function FooterBottom() {
    return (
        <Center borderBottom="1px solid lightGrey">
            <Box width={{ base: "100%", lg: "1280px" }} pl={2} pr={2} w="100%">
                <Flex flexWrap={{base: "wrap"}} justifyContent="space-around">
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                            alt="Grocery" />
                        <Text fontSize="14px" fontWeight="600">Grocery</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                            alt="Mobiles" />
                        <Text fontSize="14px" fontWeight="600">Mobiles</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d34810848b2895c9.png?q=100"
                            alt="Fashion" />
                        <Text fontSize="14px" fontWeight="600">Fashion</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                            alt="Electronics" />
                        <Text fontSize="14px" fontWeight="600">Electronics</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                            alt="Home" />
                        <Text fontSize="14px" fontWeight="600">Home</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                            alt="Appliances" />
                        <Text fontSize="14px" fontWeight="600">Appliances</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
                            alt="Travel" />
                        <Text fontSize="14px" fontWeight="600">Travel</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                            alt="Top Offers" />
                        <Text fontSize="14px" fontWeight="600">Top Offers</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                            alt="Beauty, Toys & More" />
                        <Text fontSize="14px" fontWeight="600">Beauty, Toys & More</Text>
                    </Box>
                    <Box p={3}>
                        <Image
                            objectFit="contain"
                            w="100%"
                            height="70px"
                            src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
                            alt="Two Wheelers" />
                        <Text fontSize="14px" fontWeight="600">Two Wheelers</Text>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}
