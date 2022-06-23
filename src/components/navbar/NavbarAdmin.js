// Chakra Imports
import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Stack,
  useDisclosure,
  IconButton,
  Collapse,
  Icon,
  Image,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
// import AdminNavbarLinks from "components/navbar/NavbarLinksAdmin";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { useCelo } from "@celo/react-celo";

import SidebarLinks from "components/sidebar/components/Links.js";
import image from "assets/img/nfts/Nft1.png";

import routes from "routes.js";

export default function AdminNavbar(props) {
  // eslint-disable-next-line no-unused-vars
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { connect, address } = useCelo();

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  // eslint-disable-next-line no-unused-vars
  const { secondary, message, brandText } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let navbarPosition = "fixed";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue(
    "rgba(244, 247, 254, 0.2)",
    "rgba(11,20,55,0.5)"
  );
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition="center"
      backgroundSize="cover"
      borderRadius="16px"
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      display={"block"}
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      right={{ base: "12px", md: "30px", lg: "30px", xl: "30px" }}
      px={{
        sm: paddingX,
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        // xl: "calc(100vw - 350px)",
        // "2xl": "calc(100vw - 365px)",
      }}
    >
      <Flex
        // bg={"transparent"}
        // color={useColorModeValue('gray.600', 'white')}
        // minH={"60px"}
        py={{ base: 3 }}
        // px={{ base: 4 }}
        // borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        {/* Toggle button for mobile */}
        <Flex
          // flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          w={"40px"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        {/* Toggle button for mobile  ... end*/}

        <Flex ml={{ lg: "16px", md: "0px" }}>
          {/* logo here */}
          <Image src={image} w="66px" h="66px" borderRadius="20px" me="16px" />

          {/* <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            // fontFamily={"heading"}
            // fontSize={"16px"}
            fontSize={"md"}
            fontWeight={"700"}
            // color={useColorModeValue("gray.800", "white")}
            color={linkColor}
          >
            Ticket Square
          </Text> */}
        </Flex>
        <Flex
          flex={{ base: 1 }}
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
        >
          <SidebarLinks routes={routes} />
          {/* <DesktopNav linkColor={linkColor} linkHoverColor={linkHoverColor} /> */}
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="baseline"
        >
          {/* show them option to sign in when they click on start selling */}

          {/* <Button
            variant="no-hover"
            bg="inherit"
            p="0px"
            minW="unset"
            minH="unset"
            h="18px"
            w="max-content"
            onClick={toggleColorMode}>
            <Icon
              me="10px"
              h="18px"
              w="18px"
              color={navbarIcon}
              as={colorMode === "light" ? IoMdMoon : IoMdSunny}
            />
          </Button> */}
          {/* <Button
            as={"a"}
            fontSize={"md"}
            fontWeight={700}
            variant={"link"}
            href={"#"}
            display="none"
          >
            Sign In
          </Button> */}
          <Button
            //   me='30%'
            //   mb='30px'
            onClick={connect}
            w="150px"
            minW="140px"
            //   mt={{ base: "20px", "2xl": "auto" }}
            fontWeight={700}
            variant="brand"
          >
            Connect Wallet
            {/* My tickets */}
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};

export const DesktopNav = ({ linkColor, linkHoverColor }) => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  return (
    <Stack
      position={"relative"}
      direction="row"
      justifyContent="center"
      spacing={4}
    >
      {/* <SidebarLinks routes={routes} /> */}
      {NAV_ITEMS.map((navItem) => (
        <Box>
          <Popover trigger={"trigger"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                bg="inherit"
                borderRadius="inherit"
                href={navItem.href ?? "#"}
                p={2}
                fontSize={"md"}
                fontWeight={"700"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export const MobileNav = () => {
  let backgroundColor = useColorModeValue("white", "navy.800");
  return (
    <Stack
      bg={backgroundColor}
      p={4}
      display={{ md: "none" }}
      // width={'100px'}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export const MobileNavItem = ({ label, children, href }) => {
  let menuColor = useColorModeValue("gray.400", "white");

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={menuColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export const NAV_ITEMS = [
  // {
  //   label: "Home",
  //   // children: [
  //   //   {
  //   //     label: "Explore Design Work",
  //   //     subLabel: "Trending Design to inspire you",
  //   //     href: "#",
  //   //   },
  //   //   {
  //   //     label: "New & Noteworthy",
  //   //     subLabel: "Up-and-coming Designers",
  //   //     href: "#",
  //   //   },
  //   // ],
  // },
  {
    label: "About",
    // children: [
    //   {
    //     label: "Job Board",
    //     subLabel: "Find your dream design job",
    //     href: "#",
    //   },
    //   {
    //     label: "Freelance Projects",
    //     subLabel: "An exclusive list for contract work",
    //     href: "#",
    //   },
    // ],
  },
  {
    label: "Start selling",
    href: "#",
  },
  {
    label: "Attend Event",
    href: "#",
  },
  {
    label: "My Tickets",
    href: "#",
  },
];
