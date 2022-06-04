// import AdminNavbar from './NavbarAdmin2';
import React from "react";
import {
  Text,
  useColorModeValue,
  Button,
  Link,
} from "@chakra-ui/react";
import {NavbarVertical} from './NavbarVertical';

export default {
  title: "NFTickets / Components",
};

// export const Navbar = () => <AdminNavbar brandText={'NFTickets'} />;

export const Typograph = () => {
  const textColor = useColorModeValue("brand.500", "white");

  return (
    <>
      <Text fontSize="md" fontWeight="bold" color={textColor}>
        NFTickets
      </Text>
      <Link>NFTickets</Link>
    </>
  );
};

export const Btn = () => {
  const bgColor = useColorModeValue("white", "white");

  return (
    <Button
      // position='relative'
      color={useColorModeValue("brand.200", "white")}
      bg={bgColor}
      _hover={{ bg: "whiteAlpha.900" }}
      _active={{ bg: "white" }}
      _focus={{ bg: "white" }}
      size="lg"
      // p='0px !important'
      // top='14px'
      // right='14px'
      // borderRadius='50%'
      minW="36px"
      h="36px"
      variant="solid"
    >
      Submit
    </Button>
  );
};

export const Navbar = () => {

  return (
    <NavbarVertical/>
  )
};