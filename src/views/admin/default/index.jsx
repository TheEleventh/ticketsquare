import React from "react";
import {
  Box,
} from "@chakra-ui/react";

// Assets
// Custom components

import Banner from 'components/banner/Banner';
import BannerAction from 'components/banner/BannerAction';
import HeaderText from "components/banner/HeaderText";

export default function Home() {
  // Chakra Color Mode

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "100px" }}>
    <Banner>
      <HeaderText/>
      <Box my='40px'/>
      <BannerAction />
    </Banner>
   
    </Box>
  );
}
