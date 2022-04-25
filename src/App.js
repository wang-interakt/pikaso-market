import "./css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import './css/owl.carousel.min.css';
import "./css/styles-custom.css";
import "./css/animate.min.css";
import "./font-awesome/4.7.0/css/font-awesome.min.css";
import "./css/short.css";

import { Provider } from "react-redux";
import React, {  } from "react";
import Home from "./pages/Home";

import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Web3ContextProvider from "./web3/web3-context"

function App() {
  return (
    <Provider store={store}>
      <Web3ContextProvider>
        <Router basename={"/"}>
          <Route exact path="/" component={Home} />
        </Router>
      </Web3ContextProvider>
    </Provider>
  );
}

export default App;
