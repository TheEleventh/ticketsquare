import {
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
  Icon,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";

// Assets
// Custom components
import React from "react";

import Card from "components/card/Card";
import Nft1 from "assets/img/nfts/Nft1.png";
import { IoLocationSharp } from "react-icons/io5";

export default function TicketShowcase({
  venue,
  title,
  onBuy,
  image,
  date,
  time,
}) {
  // Chakra Color Mode

  const textColor = useColorModeValue("navy.700", "white");
  return (
    <Card p="20px" w='100'>
      <Flex direction={{ base: "column" }} justify="center">
        <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
          <Image
            src={image || Nft1}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            p="21px"
            borderRadius="40px"
          />

          <Flex
            flexDirection="column"
            justify="space-between"
            h="100%"
            pt={{ base: "20px" }}
          >
            <Flex
              justify="space-between"
              direction={{
                base: "row",
                md: "column",
                lg: "row",
                xl: "column",
                "2xl": "row",
              }}
              mb="auto"
            >
              <Flex direction="column">
                <Text
                  color={textColor}
                  fontSize={{
                    base: "18px",
                  }}
                  mb="8px"
                  fontWeight={700}
                  ml="5px"
                  lineHeight="30px"
                >
                  {title || "94th Academy Awards"}
                </Text>
                <HStack p="0px" m="0px">
                  <Icon
                    as={IoLocationSharp}
                    color={"inherit"}
                    h="20px"
                    w="15px"
                    m="0px"
                    p="0px"
                  />
                  <Text
                    color={textColor}
                    fontSize={{
                      base: "16px",
                    }}
                    fontWeight="400"
                    me="14px"
                  >
                    {venue || "Dolby Theatre in Los Angeles"}
                  </Text>
                </HStack>

                <Stack
                  direction="row"
                  alignItems="baseline"
                  justifyContent="space-between"
                  width="300px"
                  mt="10px"
                >
                  <Text
                    fontSize={{
                      base: "14px",
                    }}
                    lineHeight={{ base: "30px" }}
                    fontWeight="700"
                  >
                    {date || "Sunday, March 27, 2022"}
                  </Text>
                  <Button
                    onClick={onBuy}
                    variant="darkBrand"
                    color="white"
                    fontSize="sm"
                    fontWeight="500"
                    borderRadius="70px"
                    px="39px"
                    py="5px"
                  >
                    Buy
                  </Button>
                </Stack>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
