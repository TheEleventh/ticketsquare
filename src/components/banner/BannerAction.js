import { Box, Button, HStack, useColorModeValue } from "@chakra-ui/react";

// Assets
// Custom components
import React from "react";

export default function BannerAction({ onStartSelling, onAttendEvent }) {
  // Chakra Color Mode
  const primaryBtnText = useColorModeValue("white", "black");
  const secondaryBtnText = useColorModeValue("navy.700", "white");

  return (
  
      <HStack spacing="24px">
        <Box>
          <Button
            onClick={onStartSelling}
            color={primaryBtnText}
            // color='black'
            bg="white"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            fontWeight="700"
            fontSize="16px"
            lineHeight="24px"
            py="20px"
            px="27"
            mr="13px"
          >
            Start selling
          </Button>
        </Box>
        <Box>
          <Button
            onClick={onAttendEvent}
            color={secondaryBtnText}
            bg="transparent"
            borderStyle="none"
            // _hover={{ bg: "whiteAlpha.900" }}
            // _active={{ bg: "white" }}
            // _focus={{ bg: "white" }}
            fontWeight="700"
            fontSize="16px"
            lineHeight="24px"
            py="20px"
            px="27"
          >
            Attend Event
          </Button>
        </Box>
      </HStack>
  );
}
