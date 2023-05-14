import {
  

  Box,
  Image,
  Button,
  useColorModeValue,
  useToast,


} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
// import { FiShoppingCart } from 'react-icons/fi';
import {useState,useEffect} from "react"

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center" >
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

function ProductsCard({data}) {
  const toast = useToast();

  // const [dat1,setData1]=useState([])
  
  
  const handelChangeClick=()=>{
    let arr1=JSON.parse(localStorage.getItem("items1"))||[]
    console.log(arr1)
    
arr1.push(data)


 localStorage.setItem('items1', JSON.stringify(arr1));

 toast({
  title: 'Product added to cart.',
  duration: 2000,
  status: "success",
  isClosable: true,
});
  }

  // useEffect(()=>{
  //   console.log(arr1.length)
  // },[data])
  return (

      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        fontSize={"20px"}
        textAlign={"center"}

        // borderWidth="1px"
        // rounded="lg"
        shadow="lg"
        position="relative">
        {/* (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
         ) */}
<NavLink to={`/SingleProduct/${data.id}`} >
        <Image
          src={data.image1}
          alt={`Picture of ${data.name}`}
          // roundedTop="lg"
          // width="110%"
          
        /></NavLink>
<h2>{data.category}</h2>
<h2>{data.brand}</h2>

<h2 style={{fontSize:"20px"}}>Men Solid Polo Neck Black  </h2>

{/* <img style={{width:"70%",marginTop:"17px",marginLeft:"25px"}} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="gh" /> */}

<h3>₹{data.price}  <h3 style={{color:"green"}}>{data.name} off</h3></h3>  
{/* <h3 style={{color:"brown",fontSize:"20px"}}>Hot Deal</h3>  
  
<h3 style={{fontSize:"17px"}}>Free Delivery</h3>
<h3 style={{color:"green",fontSize:"20px"}}>SIZE :- Sm,M,X,XL</h3> */}
<Button colorScheme='red' onClick={handelChangeClick}>Cart</Button>
      </Box>
  
  
  );
}

export default ProductsCard;
