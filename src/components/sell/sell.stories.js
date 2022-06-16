// import AdminNavbar from './NavbarAdmin2';
import React from "react";
import {
  Text,
  Box
} from "@chakra-ui/react";

export default {
  title: "NFTickets / Components",
};

export const BackgroundLayout = () => <BgLayout />

const BgLayout = () => {

    return (
        <Box
        bg={'white'}
        >
            <Text>This is a text</Text>
        </Box>
    )
}