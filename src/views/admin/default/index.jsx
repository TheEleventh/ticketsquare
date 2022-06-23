import React from "react";
import {
  Box,
  Flex
} from "@chakra-ui/react";

// Assets
// Custom components

import Banner from 'components/banner/Banner';
import BannerAction from 'components/banner/BannerAction';
import HeaderText from "components/banner/HeaderText";
import TicketShowcase from "components/ticket/Showcase";

export default function Home() {
  // Chakra Color Mode

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "120px" }}>
    <Banner>
      <HeaderText/>
      <Box my='40px'/>
      <BannerAction />
    </Banner>

    <Flex justifyContent='space-between' alignItems='baseline' mt='100px'>

<TicketShowcase />
<TicketShowcase />
<TicketShowcase />
</Flex>
   
    </Box>
  );
}
