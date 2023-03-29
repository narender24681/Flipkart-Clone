import { ReactNode } from "react";
import { FiBell } from "react-icons/fi";
import { AiFillBell, AiOutlineAppstore } from "react-icons/ai";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function AdminsNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div style={{ position: "sticky", top: "0" }}>
      <Box bg={useColorModeValue("blue.100", "blue.900")} px={4} p={"5px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              w={"45%"}
              src="https://user-images.githubusercontent.com/106812942/228456444-30caaafa-4aba-482a-acee-767847b3c15f.png"
            />
          </Box>

          <Flex alignItems={"center"}>
            <Button colorScheme="yellow" m={"15px"}>
              SmileKart
            </Button>
            <Stack direction={"row"} spacing={7}>
              <Button>
                <AiFillBell />
              </Button>
              <Button>
                <AiOutlineAppstore />
              </Button>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
