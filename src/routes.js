import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdHome,
} from "react-icons/md";

// Admin Imports
import Home from "views/home/default";


const routes = [
  {
    name: "Home",
    layout: "/home",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
];

export default routes;
