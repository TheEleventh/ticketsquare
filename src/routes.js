import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdHome,
} from "react-icons/md";

// Admin Imports
import Home from "views/admin/default";

const routes = [
  {
    name: "Home",
    layout: "/main",
    path: "/home",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
];

export default routes;
