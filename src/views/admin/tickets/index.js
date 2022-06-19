import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    Text,
    useColorModeValue,
    Input,
    Textarea,
    FormControl,
    Radio,
    RadioGroup,
    Stack,
  } from "@chakra-ui/react";
  import Card from "../../../components/card/Card.js";
  
  // Assets
  import Usa from "assets/img/dashboards/usa.png";
  // Custom components
  import MiniStatistics from "components/card/MiniStatistics";
  import IconBox from "components/icons/IconBox";
  import React from "react";
  import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
  } from "react-icons/md";
  // import Dropzone from "./views/main/profile/components/Dropzone";
  import Dropzone from "./../profile/components/Dropzone";
  import Upload from "./../profile/components/Upload";
  
  import { MdUpload } from "react-icons/md";
  
  export default function MyTickets() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "secondaryGray.600";
  
    const bgCard = useColorModeValue("#ffffff", "navy.800");
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorMini = useColorModeValue("navy.700", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "100px" }}>
        <Text>This are my tickets</Text>
     
      </Box>
    );
  }

  