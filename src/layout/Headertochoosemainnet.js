import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { postMethod } from "../actions/actions";
import config from "../actions/config";
import "@metamask/legacy-web3";

import { language } from "../pages/language";
import $ from "jquery";
import { toastAlert } from "../actions/toastAlert";
import { useWeb3Context } from "../hooks/web3-context";


const baseurl = config.baseUrl;
const Headertochoosemainnet = () => {

  const { symbol, address, balance, connect, disconnect, connected } = useWeb3Context();

  return(
    <div>
      <button>
        connect wallet
      </button>
    </div>
  );
  
};

export default Headertochoosemainnet;
