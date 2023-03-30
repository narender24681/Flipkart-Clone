import React from 'react'
import { Box ,Spinner,SimpleGrid} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Sidebar from './Sidebar'     
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProductscloths } from '../../Redux/FashionReducer/action'
import ProductsCard from './ProductsCard'
import "./mens.css"



const Mens = () => {
  const dispatch =useDispatch()
  const {products,isLoading}=useSelector((store)=>store.fashionReducer)


  useEffect(()=>{
dispatch(getProductscloths)
  },[])


  return (
    <div>
        <Flex >
        {/* style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}} */}
       
        <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" m="7px"  bg="white" w={{  sm:"150px", md: "300px", lg: "410px" ,xl:"430px"}}>
<Sidebar/>
</Box>
{/* <Spacer />
<Spacer /> */}
<Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  m="10px" bg="red.200" w={{ sm: "1000px",
  md: "810px",
  lg: "1090px",
  xl: "1610px",}}>
 <p>You can spruce up your style with the right bottomwear. Flipkart is home to some of the best bottomwear for men, for kids, and for women. Brands such as Wrangler, Levi’s, Lee, W, Peter England, and U.S. Polo Assn have a wide selection of chinos, jeans, shorts, and more. So, depending on your preferred style you are definitely going to find something that will find its worthy place in your wardrobe. Some of the bottom wear for women that you can shop for include shorts, plaited skirts, pencil skirts, ripped jeans, and cargo pants. Some of the bottomwear for men that you should keep an eye out for include striped chinos, formal trousers, knee-length jeans, and ripped shorts. Be sure to keep a good balance of colours in your selection. Besides the mandatory black and beige pants, you can also opt for trousers that come in colours such as olive green, brown, yellow, grey, and white. With these clothing items, we are sure that you will be the centre of attention, wherever you go, thanks to your impeccable sense of dressing. Oh, and feel free to enhance your look with some accessories. Even wearing a simple watch can go a long way in redefining your look.</p>
 <br />
 <br />
 
 <div className="mediaquery">
    {isLoading?<Spinner/>:<SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={7}>
        {products.map((el)=>
      <ProductsCard key={el.id} data={el} />)}
        </SimpleGrid>}
</div>
</Box>
</Flex>
     </div>
  )
}

export default Mens