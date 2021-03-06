import {
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
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
  

  // Custom components

  import React from "react";
  import Dropzone from "./../profile/components/Dropzone";


  
  import { MdUpload } from "react-icons/md";
  
  export default function Sell() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const bgCard = useColorModeValue("#ffffff", "navy.800");
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorMini = useColorModeValue("navy.700", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
  
    return (
      <Box pt={{ base: "130px", md: "80px", xl: "100px" }}>
        <Flex
          columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
          alignItems="center"
          alignContent="center"
          justify="center"
          mb="20px"
        >
          <Card w="70%" py="15px" m="50px" bg={bgCard}>
            <Flex
              my="auto"
              h="100%"
              width="100%"
              flexDirection="column"
              // align={{ base: "center", xl: "center" }}
              justify={{ base: "center", xl: "center" }}
            >
              <Box
                display={"flex"}
                justifyContent={{ base: "center", xl: "center" }}
                flexDirection="row"
                // align={{ base: "center", xl: "center" }}
              >
                <Text
                  color={textColorPrimary}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt="10px"
                  mb="4px"
                >
                  Create and Sell Tickets
                </Text>
              </Box>
              {/* <Box>
           <Flex>
             <Text
              fontSize='md'
              fontWeight='500'
              color={textColorMini}
             >Event Logo</Text>
             <Flex>
                <Box
             border='1px'
              borderColor='green.100'
                ></Box>
             </Flex>
           </Flex>
         </Box> */}
  
              <Flex
                direction={{ base: "column", md: "row" }}
                w={{ base: "100%" }}
                justifyContent="flex-start"
                alignItems="center"
                mt='75px'
                mb="50px"
              >
                <Box ml='59px'>
                  <Text fontSize="md" fontWeight="500" color={textColorMini}>
                    Event Logo/NFT Art
                  </Text>
                </Box>
  
                <Flex
                // flex='1' 
                
                  h="100%"
                  direction={{ base: "column", "2xl": "row" }}
                  justifyContent="flex-end"
                  ml='99px'
                >
                  <Dropzone
                    w={{ base: "140%", "2xl": "268px" }}
                    h={{ base: "200px" }}
                    // me="36px"
                    // maxH={{ base: "100%", lg: "100%", "2xl": "100%" }}
                    // minH={{ base: "100%", lg: "100%", "2xl": "100%" }}
                    content={
                      <Box>
                        <Icon
                          as={MdUpload}
                          w="80px"
                          h="80px"
                          color={brandColor}
                        />
                        <Flex justify="center" mx="auto" mb="12px">
                          <Text fontSize="xl" fontWeight="700" color={brandColor}>
                            Upload File Here
                          </Text>
                        </Flex>
                        <Text
                          fontSize="sm"
                          fontWeight="500"
                          color="secondaryGray.500"
                        >
                          PNG, JPG and GIF files are allowed
                        </Text>
                      </Box>
                    }
                  />
                </Flex>
              </Flex>
              <Box diplay="flex" justifyContent="center" width="80%" mt="36px">
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColorMini}
                    // mr='100px'
                  >
                    Event Name<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    color={textColorMini}
                    isRequired={true}
                    variant="outline"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    w="50%"
                    type="text"
                    placeholder="mail@ticketsquare.com"
                    // mb='24px'
                    fontWeight="500"
                    size="md"
                  />
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="0px"
                    fontSize="md"
                    fontWeight="500"
                    justifySelf="flex-start"
                    // color={textColor}
                  >
                    Event Description<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Textarea
                    color={textColorMini}
                    isRequired={true}
                    variant="outline"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    w="50%"
                    type="text"
                    // placeholder="mail@ticketsquare.com"
                    // mb='24px'
                    fontWeight="500"
                    size="md"
                  />
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColor}
                  >
                    Event Type<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Select
                    size="md"
                    w="50%"
                    id="eventtype"
                    placeholder="Select event type"
                  >
                    <option>Entertainment</option>
                    <option>Religion</option>
                  </Select>
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColorMini}
                    // mr='100px'
                  >
                    Ticket Price
                  </FormLabel>
                  <Input
                    color={textColorMini}
                    isRequired={true}
                    variant="outline"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    w="50%"
                    type="number"
                    placeholder="0.00"
                    // mb='24px'
                    fontWeight="500"
                    size="md"
                  />
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColor}
                  >
                    Event Venue<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    color={textColorMini}
                    variant="outline"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    w="50%"
                    type="text"
                    placeholder="2,Lobster road, Vindisel Stadium"
                    // mb='24px'
                    fontWeight="500"
                    size="md"
                  />
                </FormControl>
  
                <FormControl
                  display="flex"
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={{ base: "flex-start", md: "center" }}
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <Flex>
                    <FormLabel
                      display="flex"
                      ms="4px"
                      fontSize="md"
                      fontWeight="500"
                      color={textColorMini}
                      justifySelf="flex-start"
                    >
                      Date/Time<Text color={brandStars}>*</Text>
                    </FormLabel>
                  </Flex>
  
                  <Flex width="50%" justifyContent="space-around">
                    <Input
                      color={textColorMini}
                      isRequired={true}
                      variant="outline"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      w={{ base: "100px", md: "177px" }}
                      type="date"
                      fontWeight="500"
                      size="md"
                    />
                    <Input
                      color={textColorMini}
                      isRequired={true}
                      variant="outline"
                      fontSize="sm"
                      ms={{ base: "0px", md: "0px" }}
                      w={{ base: "100px", md: "177px" }}
                      type="time"
                      fontWeight="500"
                      size="md"
                    />
                  </Flex>
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColor}
                  >
                    Ticket type<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Select
                    size="md"
                    w="50%"
                    id="ticket_type"
                    placeholder="Select event type"
                  >
                    <option>Premium</option>
                    <option>Regular</option>
                    <option>Platinum</option>
                  </Select>
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="baseline"
                  align="center"
                  justifyContent="flex-start"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    fontSize="md"
                    fontWeight="500"
                    color={textColor}
                    w={{ lg: "436px" }}
                    flex='1'
                  >
                    Promote your event through our lottery system by dropping
                    tickets for giveaway?<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <RadioGroup
                    // position='absolute'
                    display="flex"
                    top="25px"
                    float="left"
                    // onChange={setValue}
                    // value={value
                  >
                    <Stack direction="row">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    // ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColor}
                    flex='1'
                  >
                    How many tickets do you want to giveaway
                    <Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Select postion='relative' left='-50px'  size="md" w="20%" id="ticketGivewayNo">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Select>
                </FormControl>
  
                <FormControl
                  display="flex"
                  alignItems="center"
                  align="center"
                  justifyContent="space-around"
                  mb="40px"
                >
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="md"
                    fontWeight="500"
                    color={textColor}
                  >
                    Will you like to create giveaway questions?
                    <Text color={brandStars}>*</Text>
                  </FormLabel>
                  <RadioGroup
                  // onChange={setValue}
                  // value={value
                  >
                    <Stack direction="row">
                      <Radio value="1">Yes</Radio>
                      <Radio value="2">No</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Box>
            </Flex>
          </Card>
        </Flex>
      </Box>
    );
  }
  