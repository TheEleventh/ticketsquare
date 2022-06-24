import { Box, Flex } from "@chakra-ui/react";
import React from "react";

// Assets
import coachella from "assets/img/nfts/coachella.png";
import fifa from "assets/img/nfts/fifa.png";
import comic from "assets/img/nfts/comic_con.png";
import oscar from "assets/img/nfts/oscars_big.png";
import ucl from "assets/img/nfts/ucl.png";

// Custom components

import TicketShowcase from "components/ticket/Showcase";

const ITEMS = [
  {
    venue: "Dolby Theatre in Los Angeles",
    title: "94th Academy Awards",
    image: oscar,
    date: "Sunday, March 27, 2022.",
  },
  {
    venue: "Saint-Denis's Stade de France",
    title: "UEFA Champions League Final 2022",
    image: ucl,
    date: "Saturday, May 28, 2022.",
  },
  {
    venue: "San Diego Convention Center",
    title: "San Diego Comic-Con International",
    image: comic,
    date: "Thursday, July 21, 2022.",
  },
  {
    venue: "Empire Polo Club",
    title: "Coachella Music and Arts Festival",
    image: coachella,
    date: "Friday, April 15, 2022.",
  },
  {
    venue: "Al Bayt Stadium, Qatar",
    title: "FIFA World Cup Qatar 2022",
    image: fifa,
    date: "Thursday, Nov. 22, 2022.",
  },
];
export default function Components() {
  // Chakra Color Mode

  return (
    <Box
      mt={{ lg: "65px" }}
      pt={{ base: "130px", md: "80px", xl: "100px" }}
      px={{ base: "50px" }}
    >
      <Flex
        justifyContent="flex-start"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={{ base: "40px", lg: "145px", "2xl": "145px" }}
      >
        {ITEMS &&
          ITEMS.map((item, index) => <TicketShowcase {...item} key={index} />)}
      </Flex>
    </Box>
  );
}
