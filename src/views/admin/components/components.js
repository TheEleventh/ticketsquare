import { Box, Flex } from "@chakra-ui/react";

// Assets
// Custom components
import React from "react";

import TicketShowcase from "components/ticket/Showcase";
export default function Components() {
  // Chakra Color Mode

  return (
    <Box
      mt={{ lg: "65px" }}
      pt={{ base: "130px", md: "80px", xl: "100px" }}
      px={{ base: "50px" }}
    >
      <Flex justifyContent='space-between' alignItems='baseline'>

      <TicketShowcase />
      <TicketShowcase />
      <TicketShowcase />
      </Flex>

    </Box>
  );
}
