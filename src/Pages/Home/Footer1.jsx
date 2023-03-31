import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer1 = () => {
  return (
    <Box
      pt="40px"
      pb="40px"
      mt="25px"
      color="white"
      lineHeight="2"
      fontSize="12px"
      fontWeight="500"
      backgroundColor="#172337"
    >
      <Box w="100%">
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          <Box>
            <Flex flexWrap="wrap" justifyContent="space-evenly">
              <Box>
                <Text mb="7px" color="gray">ABOUT</Text>
                <Text>Contact Us</Text>
                <Text>About Us</Text>
                <Text>Careers</Text>
                <Text>Flipkart Stories</Text>
                <Text>Press</Text>
                <Text>Flipkart Wholesale</Text>
                <Text>Corporate Information</Text>
              </Box>

              <Box>
                <Text mb="7px" color="gray">HELP</Text>
                <Text>Payments</Text>
                <Text>Shipping</Text>
                <Text>Cancellation & Returns</Text>
                <Text>FAQ</Text>
                <Text>Report Infringement</Text>
              </Box>

              <Box>
                <Text mb="7px" color="gray">CONSUMER POLICY</Text>
                <Text>Return Policy</Text>
                <Text>Terms Of Use</Text>
                <Text>Security</Text>
                <Text>Privacy</Text>
                <Text>Sitemap</Text>
                <Text>Grievance Redressal</Text>
                <Text>EPR Compliance</Text>
              </Box>

              <Box>
                <Text mb="7px" color="gray">SOCIAL</Text>
                <Text>Facebook</Text>
                <Text>Twitter</Text>
                <Text>YouTube</Text>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Divider orientation='vertical' />
          </Box>

          <Box>
            <Flex flexWrap="wrap" justifyContent="space-evenly">
              <Box>
                <Text mb="7px" color="gray">Mail Us:</Text>
                <Text>Flipkart Internet Private Limited,</Text>
                <Text>Buildings Alyssa, Begonia &</Text>
                <Text>Clove Embassy Tech Village,</Text>
                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                <Text>Bengaluru, 560103,</Text>
                <Text>Karnataka, India</Text>
              </Box>

              <Box>
                <Text mb="7px" color="gray">Registered Office Address:</Text>
                <Text>Flipkart Internet Private Limited,</Text>
                <Text>Buildings Alyssa, Begonia &</Text>
                <Text>Clove Embassy Tech Village,</Text>
                <Text>Outer Ring Road, Devarabeesanahalli Village,</Text>
                <Text>Bengaluru, 560103,</Text>
                <Text>Karnataka, India</Text>
                <Text>CIN : U51109KA2012PTC066107</Text>
                <Text>Telephone: 044-45614700</Text>
              </Box>
            </Flex>
          </Box>

        </Flex>
      </Box>


    </Box>
  )
}
