import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import "@metamask/legacy-web3";
import { toastAlert } from "../actions/toastAlert";
import "react-toastify/dist/ReactToastify.css";
import { language } from "../pages/language";

import { useWeb3Context } from "../web3/web3-context";

const Header = () => {

  const { connected, connect } = useWeb3Context();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  if (!connected) {
    toastAlert("error", "Please Login Metamask External", "error");
  }

  var localStorageLang = localStorage.getItem("lang");
  if (localStorageLang === null) {
    localStorageLang = "Japanese";
  }

  return (
    <header>
      <Navbar className="navbar nav-style">
        <Container fluid className="nav-lr-custom-50">
          <div className="navbar-header">
            <Navbar.Toggle aria-controls="myNavbar" />
            <Link className="navbar-brand ml-0" to="/">
              <Image
                src="../images/logo.png"
                className="img-responsive"
                alt=""
              />
            </Link>
          </div>
          <Navbar.Collapse className="navbar-collapse" id="myNavbar">
            <ul className="mr-auto nav navbar-nav">
              <li className="active">
                <Link to="#">{language[localStorageLang].EXPLORE}</Link>
              </li>
              <li>
                <Link to="#">{language[localStorageLang].HOW_WORKS}</Link>
              </li>
            </ul>
            <ul className="ml-auto navbar-nav menu nav navbar-right">
              <li>
                <Link
                  to="#"
                  className="connect-wallet"
                  type="button"
                  onClick={handleShow}
                >
                  {language[localStorageLang].WALLET_HEADER}
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={show}
        size="md"
        onHide={handleClose}
        centered
        id="connect-wallet-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{language[localStorageLang].CONNECT_WALLET}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-30 pr-30">
          <p>
            {language[localStorageLang].CONNECT_AVAILABLE}
            <span className="theme-clr">
              {language[localStorageLang].WHAT_WALLET}
            </span>
          </p>
          <div className="box-item-wallet">
            <span>
              <Image
                src="images/Fortmatic.svg"
                className="img-responsive img-wallet"
              />
            </span>
            <span className="content-connect-wallet">
              {language[localStorageLang].FORTMATIC}
            </span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image
                src="images/WalletConnet.svg"
                className="img-responsive img-wallet"
              />
            </span>
            <span className="content-connect-wallet">
              {language[localStorageLang].WALLET_CONNECT}
            </span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image
                src="images/CoinbaseWallet.svg"
                className="img-responsive img-wallet"
              />
            </span>
            <span className="content-connect-wallet">
              {language[localStorageLang].COINBASE_WALLET}
            </span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image
                src="images/MyEtherWallet.svg"
                className="img-responsive img-wallet"
              />
            </span>
            <span className="content-connect-wallet">
              {language[localStorageLang].MYETHER}
            </span>
          </div>
          <div className="box-item-wallet" onClick={connect}>
            <span>
              <Image
                src="images/MetamaskWallet.svg"
                className="img-responsive img-wallet"
              />
            </span>
            <span className="content-connect-wallet">
              {language[localStorageLang].METAMASK}
            </span>
          </div>
          <p>{language[localStorageLang].CONFIRMATION}</p>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default Header;
