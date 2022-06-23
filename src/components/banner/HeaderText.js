import {
  Text,
  useBreakpointValue,
  Stack,
  Heading,
} from "@chakra-ui/react";

// Assets
// Custom components
import React from "react";

export default function HeaderText() {
  // Chakra Color Mode

  return (
  
      <Stack maxW={"2xl"} align={"flex-start"} spacing={0}>
        <Heading
          color={"white"}
          fontWeight={"bold"}
          mb='16px'
          // lineHeight={'42px'}
          fontSize={useBreakpointValue({ base: "3xl", md: "34px" })}
          maxWidth={'387px'}
        >
          An NFT ticketing platform for events around the world.
        </Heading>
        <Text
          fontSize={useBreakpointValue({ base: "16px" })}
          fontWeight="500"
          letterSpacing="1px"
          maxW="23rem"
          color="#E3DAFF"
        >
          Enter in this market place. Buy, create and sell tickets for your
          events!
        </Text>
      </Stack>

  );
}
