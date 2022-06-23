import { Box } from "@chakra-ui/react";

// Assets
// Custom components
import React from "react";
import homebanner from "assets/img/banner/homebanner.png";

export default function Banner({ children }) {
  // Chakra Color Mode

  return (
    <Box
      mt={{ lg: "65px" }}
      // pt={{ base: "130px", md: "80px", xl: "100px" }}
      // px={{ base: "50px" }}
      position="relative"
    >
      <Box
      pt={{ base: "47px" }}
      pl={{base: '64px'}}

        backgroundImage={homebanner}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={"21.875rem"}
        minHeight="100%"
        borderColor="none"
        borderStyle={"none"}
        borderwidth="0px"
        borderRadius="3xl"
        position="relative"
      >
        {children}
      </Box>
    </Box>
  );
}
