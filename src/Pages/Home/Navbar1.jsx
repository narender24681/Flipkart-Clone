import { ChevronDownIcon, Search2Icon, StarIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, FormControl, FormLabel, Heading, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpointValue, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaAdversal, FaBars, FaBell, FaBitcoin, FaCartPlus, FaDownload, FaGift, FaGifts, FaHeart, FaQuestion, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { login, logout, signup } from '../../Redux/AuthReducer/action';

const loginFormInitialData = {
  email: "",
  password: "",
}

const signupFormInitialData = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
}

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

      <NavbarBottom />
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
  const toast = useToast();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector(store => store.authReducer);
  //   console.log("-------------------------", isAuth, user);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoginModel, setIsLoginModel] = useState(true);
  const [loginFormData, setLoginFormData] = useState(loginFormInitialData);
  const [signupFormData, setSignupFormData] = useState(signupFormInitialData);

  const handleLoginFormChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  }

  const handleLogin = () => {
    //   console.log(loginFormData);
    dispatch(login(loginFormData))
      .then(res => {
        // console.log(res);
        if (res) {
          toast({
            title: 'Logged-in successfully.',
            duration: 2000,
            status: "success",
            isClosable: true,
          });
        }
        else {
          toast({
            title: 'Incorrect email/password.',
            duration: 2000,
            status: "error",
            isClosable: true,
          });
        }
      })
    setLoginFormData(loginFormInitialData);
    onClose();
  }

  const handleSignupFormChange = (e) => {

 
      setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
   
    
  }



  const handleSignup = () => {
let flag=false
 
      
      for(let i=0;i<signupFormData.email.length;i++){
if(signupFormData.email[i]=="@"){
  flag=true
}
      }


   if(signupFormData.email=="" || flag==false){
alert("please enter your email and it should be a proper email","It is required")
   }else    if(signupFormData.firstName==""){
    alert("please enter your First Name","It is required")
       }else    if(signupFormData.lastName==""){
        alert("please enter your lastName","It is required")
           }else    if(signupFormData.password==""){
            alert("please enter your Password","It is required")
               }else {
                dispatch(signup(signupFormData))
                .then(res => {
                  // console.log(res);
                  if (res) {
                    toast({
                      title: 'Account created successfully.',
                      duration: 2000,
                      status: "success",
                      isClosable: true,
                    });
                  }
                  else {
                    toast({
                      title: 'Email already present.',
                      duration: 2000,
                      status: "error",
                      isClosable: true,
                    });
                  }
                })
              setSignupFormData(signupFormInitialData);
              onClose();
               }
  
  }

  const handleLogout = () => {
    dispatch(logout);
    toast({
      title: 'Successfully logged-out.',
      duration: 2000,
      status: "success",
      isClosable: true,
    });
  }

  return (
    <Flex alignItems="center" justifyContent="space-evenly">
      <Link to="/">
        <Logo />
      </Link>

      <Searchbar />

      {isAuth ?
        <Menu>
          <MenuButton _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white" as={Text} righticon={<ChevronDownIcon color="red" />}>
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
            <MenuItem onClick={handleLogout} icon={<FiLogOut color="#2874f0" />}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
        :
        <>
          <Text onClick={onOpen} _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white">Login</Text>

          <Modal
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              {isLoginModel ?
                <>
                  <ModalHeader>Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input name="email" value={loginFormData.email} onChange={handleLoginFormChange} type="email" placeholder='Enter email' />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Password</FormLabel>
                      <Input name="password" value={loginFormData.password} onChange={handleLoginFormChange} type="password" placeholder='Enter password' />
                    </FormControl>

                    <Center mt="2">
                      <Text fontSize="sm">Don't have an account? <Text as="span" fontSize="sm" color="#2874f0" _hover={{ cursor: "pointer" }} onClick={() => setIsLoginModel(false)}>Signup</Text></Text>
                    </Center>

                    <Center mt="4">
                      <Button onClick={handleLogin} colorScheme='blue' fontSize="sm">Login</Button>
                    </Center>
                  </ModalBody>
                </>
                :
                <>
                  <ModalHeader>Signup</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input type="email" name="email" value={signupFormData.email} onChange={handleSignupFormChange}  placeholder='Enter email' required/>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>First Name</FormLabel>
                      <Input name="firstName" value={signupFormData.firstName} onChange={handleSignupFormChange} type="text" placeholder='Enter first name' required/>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Last Name</FormLabel>
                      <Input name="lastName" value={signupFormData.lastName} onChange={handleSignupFormChange} type="text" placeholder='Enter last name' required/>
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Password</FormLabel>
                      <Input name="password" value={signupFormData.password} onChange={handleSignupFormChange} type="password" placeholder='Enter password' required/>
                    </FormControl>
                    <Center mt="2">
                      <Text fontSize="sm">Have an account? <Text as="span" fontSize="sm" color="#2874f0" _hover={{ cursor: "pointer" }} onClick={() => setIsLoginModel(true)}>Login</Text></Text>
                    </Center>

                    <Center mt="4">
                      <Button onClick={handleSignup} colorScheme='blue' fontSize="sm">Signup</Button>
                    </Center>
                  </ModalBody>
                </>}
            </ModalContent>
          </Modal>
        </>
      }


      <Text display={{ md: "none", lg: "block" }} _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white">Become a Seller</Text>

      <Menu>
        <MenuButton _hover={{ cursor: "pointer" }} fontSize="md" fontWeight="600" color="white" as={Text} righticon={<ChevronDownIcon color="red" />}>
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
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q");
  const [searchQuery, setSearchQuery] = useState(initialQuery || "");

  useEffect(() => {
    if(searchParams == "") {
      setSearchQuery("");
    }
  }, [searchParams]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  const handleSearch = () => {
    // console.log(`/search?q=${searchQuery}`);
    navigate(`/search?q=${searchQuery}`);
  }

  return (
    <InputGroup size="sm"
      w={{ base: "300px", md: "300px", lg: "350px" }}>
      <Input
        bg="white"
        type="search"
        borderColor="grey"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for products, brands and more"
        _placeholder={{ opacity: 0.7, color: "grey" }} />
      <InputRightElement _hover={{ cursor: "pointer" }} children={<Search2Icon onClick={handleSearch} color="#2874f0" />} />
    </InputGroup>
  )
}

function NavbarBottom() {
  return (
    <Center borderBottom="1px solid lightGrey">
      <Box width={{ base: "100%", lg: "1280px" }} p={2} w="100%">
        <Flex flexWrap={{ base: "wrap" }} justifyContent="space-around">
        <Box p={1}>
            <Menu>
              <MenuButton _hover={{ cursor: "pointer" }} textAlign="center" fontSize="14px" fontWeight="600" as={Text} righticon={<ChevronDownIcon color="red" />}>
                <Image
                  objectFit="contain"
                  w="100%"
                  height="70px"
                  src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d34810848b2895c9.png?q=100"
                  alt="Fashion" />
                Fashion
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem as="a" href="/mens">Mens</MenuItem>
                <MenuItem as="a" href="/womens">Womens</MenuItem>
                
              </MenuList>
            </Menu>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
              alt="Grocery" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Grocery</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
              alt="Mobiles" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Mobiles</Text>
          </Box>

          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
              alt="Electronics" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Electronics</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
              alt="Home" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Home</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
              alt="Appliances" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Appliances</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
              alt="Travel" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Travel</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
              alt="Top Offers" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Top Offers</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
              alt="Beauty, Toys & More" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Beauty, Toys & More</Text>
          </Box>
          <Box p={1}>
            <Image
              objectFit="contain"
              w="100%"
              height="70px"
              src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
              alt="Two Wheelers" />
            <Text textAlign="center" fontSize="14px" fontWeight="600">Two Wheelers</Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  )
}
