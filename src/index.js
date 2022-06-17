import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import MainLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
// import { CeloProvider } from '@celo/react-celo';
import '@celo/react-celo/lib/styles.css';
// import { useCelo } from '@celo/react-celo';
import {
  Alfajores,
  CeloProvider,
  Theme,
  UseCelo,
  useCelo,
} from '@celo/react-celo';
import Web3 from 'web3';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CeloProvider
      dapp={{
        name: 'My awesome dApp',
        description: 'My awesome description',
        url: 'https://example.com',
      }}
      network={Alfajores}
      connectModal={{
        // This options changes the title of the modal and can be either a string or a react element
        title: <span>Connect your Wallet</span>,
        providersOptions: {
          searchable: true,
        },
      }}
    >
    <React.StrictMode>
      <HashRouter>
        <Switch>
          <Route path={`/main`} component={MainLayout} />
          <Redirect from='/' to='/main' />
        </Switch>
      </HashRouter>
    </React.StrictMode>
    </CeloProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
