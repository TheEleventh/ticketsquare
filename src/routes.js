// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Icon } from "@chakra-ui/react";
// import {
//   MdHome,
// } from "react-icons/md";

// Admin Imports
import Home from "views/admin/default";
import Sell from "views/admin/sell";
// import Buy from "views/admin/buy";
import MyTickets from "views/admin/tickets";
import About from "views/admin/about";

const routes = [
  {
    name: "Home",
    layout: "/main",
    path: "/home",
    // icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
  {
    name: "Start Selling",
    layout: "/main",
    path: "/sell",
    // icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Sell,
  },
  {
    name: "About",
    layout: "/main",
    path: "/about",
    // icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: About,
  },
  {
    name: "Attend Event",
    layout: "/main",
    path: "/attend_event",
    // icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: Home,
  },
  {
    name: "My Tickets",
    layout: "/main",
    path: "/my_tickets",
    // icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MyTickets,
  },
];

export default routes;
