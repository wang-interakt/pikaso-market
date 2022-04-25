import React, { useEffect, useState } from 'react';
import { 
  Link, 

} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

import { toastAlert } from "../actions/toastAlert";
import { setCurrentUser, register, login } from "../actions/community";
import axios from "axios";
import { useDispatch } from "react-redux";
import config from '../actions/config';

import '@metamask/legacy-web3';
import isEmpty from "../lib/isEmpty";
import $ from "jquery";
import 'bootstrap';
import { loginValidate } from '../actions/loginValidate';
import {communityProfile} from "./../actions/community";
import {language} from '../pages/language'
import eth_menu from '../images/eth_menu.svg';
import polygon_menu from '../images/polygon_menu.svg';
const baseurl = config.baseUrl;

const initialFormValue = {
  email: "",
  username: "",
  name: "",
  password: "",
  confirmpassword: ""
};

const initialLogin = {
  lemail: "",
  lpassword: ""
};

// var network = true;
const Communityheader = (props) => {


  const [show, setShow] = useState(false);
  const [img, setimg] = useState('');
  // const history = useHistory();
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(initialFormValue);
  const [loginValue, setloginValue] = useState(initialLogin);
  const [validateError, setValidateError] = useState({});
  const [loginError, setloginError] = useState({});
  const [
    isLogin, 
    // setisLogin
  ] = React.useState(loginValidate());
  const [userdetails, setuserdetails] = React.useState({});

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getprofile();
  }, [])

  async function getprofile() {
    let { result } = await communityProfile();
    
    var image = baseurl+"community/noimage.png";
    if(result && result.profile_image && result.profile_image !== ""){
        image = baseurl+"community/"+result.profile_image;
    }
    setimg(image);
      
    
    setuserdetails(result);
  }

  const onChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
  };

  const loginChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    let formData = { ...loginValue, ...{ [id]: value } };
    setloginValue(formData);
  };

  const registration = async (e) => {

    e.preventDefault();
    let { 
      error, 
      // result 
    } = await register(formValue);
    setValidateError({});
    if (!isEmpty(error)) {
      setValidateError(error);
    } else {
      setFormValue(initialFormValue);
      //$('#closereg').modal('hide');
      $('#closereg').trigger('click');
      toastAlert('success', "Register Successfully.Activation Link sent to Registered Email", 'success')

    }
  };


  const loginSubmit = async (e) => {

    e.preventDefault();
    axios
      .get("https://pro.ip-api.com/json?key=VT6Pto4zNt4X0vF")
      .then(async (response) => {
        var data = response.data;
        
        let reqData = {
          email: loginValue.lemail,
          password: loginValue.lpassword,
          data
        }
        const { 
          error, 
          active, token } = await login(reqData);
        
        if (isEmpty(error)) {
          if (active === "Activated") {
            setloginValue(initialLogin);
            toastAlert('success', 'Logged in Successfully.', 'login');
            window.location.reload();
            dispatch(setCurrentUser(token))
          } else {
            toastAlert('error', 'Your account has been not activated', 'login',);
            setloginError("");
          }
        } else {
          setloginError(error);
        }
      })

  };

  var localStorageLang = localStorage.getItem("lang")
  if(localStorageLang === null){
    localStorageLang = "Japanese"
  }

  return (
    <header>

      <ul className="mobile-profile-notification">
        <li className="dropdown mobile-notification">
          <Link className="dropdown-toggle bell-icon" data-toggle="dropdown" to="#">
            <i className="fa fa-bell"></i>
          </Link>
          <ul className="dropdown-menu community-ddm notification-list">
            <li><Link to={"#"}><label>{language[localStorageLang].NOTIFICATIONS}</label></Link></li>
            <li className="divider"></li>
            <li>
              <Link to="#">
                <div className="notifier-elements">
                  <div className="notification-list-img">
                    <Image alt="" src="images/favicon.png" className="img-responsive" />
                  </div>
                  <div className="notification-list-content">
                    <h4>{language[localStorageLang].NFT_RECEIVED}</h4>
                    <p className="para-color">{language[localStorageLang].NFT_RECEIVED}</p>
                  </div>
                  <div className="notification-list-timings">
                    <span className="para-color">{language[localStorageLang].MIN_AGO}</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="divider"></li>
            <li>
              <Link to="#">
                <div className="notifier-elements">
                  <div className="notification-list-img">
                    <Image alt="" src="images/favicon.png" className="img-responsive" />
                  </div>
                  <div className="notification-list-content">
                    <h4>{language[localStorageLang].NFT_RECEIVED}</h4>
                    <p className="para-color">10 10 NFT received</p>
                  </div>
                  <div className="notification-list-timings">
                    <span className="para-color">{language[localStorageLang].DAY_AGO}</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="divider"></li>
            <li>
              <Link to="#">
                <div className="notifier-elements">
                  <div className="notification-list-img">
                    <Image alt="" src="images/favicon.png" className="img-responsive" />
                  </div>
                  <div className="notification-list-content">
                    <h4>{language[localStorageLang].NFT_RECEIVED}</h4>
                    <p className="para-color">10 {language[localStorageLang].NFT_RECEIVED}</p>
                  </div>
                  <div className="notification-list-timings">
                    <span className="para-color">{language[localStorageLang].DAYS_AGO}</span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      {isLogin &&
        <li className="dropdown mobile-profile">
          <Link className="dropdown-toggle profile-section" data-toggle="dropdown" to="#">
            <div className="profile-list">
              <div className="profile-list-img">
                <Image alt="" src={img} className="img-responsive" />
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              </div>
              <div className="profile-list-content">
                <h5>{language[localStorageLang].WETH_5}</h5>
                <p className="para-color">{(userdetails && userdetails.name)?userdetails.name:""}</p>
              </div>
              <div className="profile-list-icon">
                <i className="fa fa-chevron-down"></i>
              </div>
            </div>
          </Link>
          <ul className="dropdown-menu community-ddm notification-list">
            
            <li>
              <Link to="/community-profile">
               {language[localStorageLang].EDIT_PROFILE}
            </Link>
            </li>
           
          </ul>
        </li>
        }
      </ul>

      <Navbar className="navbar nav-style">
        <Container fluid className="nav-lr-custom-50">
          <div className="navbar-header">
            <Navbar.Toggle aria-controls="myNavbar" />
            <Link className="navbar-brand ml-0" to="/">
              <Image src="../images/logo.png" className="img-responsive" alt="" />
            </Link>
          </div>
          <Navbar.Collapse className="navbar-collapse" id="myNavbar">
          <ul className="mr-auto nav navbar-nav">
              {/* <li className="active">
                <Link to="/">{language[localStorageLang].EXPLORE}</Link>
              </li> */}
              <li>
                <Link to="/how-it-works" style={{color:"black"}}>{language[localStorageLang].HOW_WORKS}</Link>
              </li>
              <li className="active">
                <Link to="/explore" style={{color: "black"}}>{language[localStorageLang].EXPLORE}</Link>
              </li>
              <li className="dropdown desktop-notification">
                 <Link className="bell-icon" data-toggle="dropdown" to="#" style={{color:"black"}}>
                    <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu community-ddm notification-list">
                    <li>
                      <Link to="/explore/ethereum"><img src={eth_menu} style={{width:"20px"}} /> {language[localStorageLang].ETHEREUM}</Link>
                    </li>
                    <li>
                      <Link to="/explore/polygon"><img src={polygon_menu} style={{width:"20px"}} /> {language[localStorageLang].POLYGON}</Link>
                    </li>
                  </ul>
              </li>
             
            </ul>
            {isLogin && 
            <ul className="ml-auto navbar-nav menu nav navbar-right">
            
              <li className="dropdown desk-profile">
                <Link className="profile-section" data-toggle="dropdown" to="#">
                  <div className="profile-list">
                    <div className="profile-list-img">
                      <Image src={img} className="img-responsive" />
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div className="profile-list-content">
                      <p className="para-color">{(userdetails && userdetails.name)?userdetails.name:""}</p>
                    </div>
                    <div className="profile-list-icon">
                      <i className="fa fa-chevron-down"></i>
                    </div>
                  </div>
                </Link>
                <ul className="dropdown-menu community-ddm notification-list">
                  
                  <li>
                    <Link to="/community-profile">
                    {language[localStorageLang].EDIT_PROFILE}
                      </Link>
                  </li>
                 
                </ul>
              </li>

            </ul>
            }
            {/* {!isLogin &&
              <ul className="ml-auto navbar-nav menu nav navbar-right">
                <li><Link data-toggle="modal" data-target="#register_modal">{language[localStorageLang].SIGNUP}</Link></li>
                <li><Link data-toggle="modal" data-target="#login_modal">{language[localStorageLang].LOGIN}</Link></li>
              </ul>
            } */}
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
      <Modal show={show} size="md" onHide={handleClose} centered id="connect-wallet-modal">
        <Modal.Header closeButton>
          <Modal.Title>{language[localStorageLang].CONNECT_WALLET}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-30 pr-30">
          <p>{language[localStorageLang].CONNECT_AVAILABLE}<span className="theme-clr">{language[localStorageLang].WHAT_WALLET}</span></p>
          <div className="box-item-wallet">
            <span>
              <Image src="images/Fortmatic.svg" className="img-responsive img-wallet" />
            </span>
            <span className="content-connect-wallet">{language[localStorageLang].FORTMATIC}</span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image src="images/WalletConnet.svg" className="img-responsive img-wallet" />
            </span>
            <span className="content-connect-wallet">{language[localStorageLang].WALLET_CONNECT}</span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image src="images/CoinbaseWallet.svg" className="img-responsive img-wallet" />
            </span>
            <span className="content-connect-wallet">{language[localStorageLang].COINBASE_WALLET}</span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image src="images/MyEtherWallet.svg" className="img-responsive img-wallet" />
            </span>
            <span className="content-connect-wallet">{language[localStorageLang].MYETHER}</span>
          </div>
          <div className="box-item-wallet">
            <span>
              <Image src="images/MetamaskWallet.svg" className="img-responsive img-wallet" />
            </span>
            <span className="content-connect-wallet">{language[localStorageLang].METAMASK}</span>
          </div>
          <p>{language[localStorageLang].CONFIRMATION}</p>
        </Modal.Body>
      </Modal>

      {/* register modal */}
      <div className="modal fade primary_modal" id="register_modal" tabIndex="-1" role="dialog" aria-labelledby="register_modalCenteredLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal" role="document">
          <div className="modal-content" id="hide"  >
            <div className="modal-header text-center">
              <h5 className="modal-title" id="register_modalLabel_1">{language[localStorageLang].CREATE_ACCOUNT}</h5>
              <button type="button" id="closereg" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="login_form mt-3" >
                <div className="form-row">

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].EMAIL}</label>
                    <div className="mb-3">
                      <input type="text" value={formValue.email} onChange={onChange} id="email" className="form-control" placeholder={language[localStorageLang].EMAIL_PLACEHOLDER} />
                      {
                        validateError.email && <span className="text-danger">{validateError.email}</span>
                      }
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].USERNAME}</label>
                    <div className="mb-3">
                      <input type="text" value={formValue.username} onChange={onChange} id="username" className="form-control" placeholder={language[localStorageLang].USERNAME_PLACEHOLDER} />
                      {
                        validateError.username && <span className="text-danger">{validateError.username}</span>
                      }
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].NAME}</label>
                    <div className="mb-3">
                      <input type="text" value={formValue.name} onChange={onChange} id="name" className="form-control" placeholder={language[localStorageLang].NAME_PLACEHOLDER} />
                      {
                        validateError.name && <span className="text-danger">{validateError.name}</span>
                      }
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].PASSWORD}</label>
                    <div className="mb-3">
                      <input type="password" value={formValue.password} onChange={onChange} id="password" className="form-control" placeholder={language[localStorageLang].PASSWORD_PLACEHOLDER} />
                      {
                        validateError.password && <span className="text-danger">{validateError.password}</span>
                      }
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].CONFIRM_PASSWORD}</label>
                    <div className="mb-3">
                      <input type="password" value={formValue.confirmpassword} onChange={onChange} id="confirmpassword" className="form-control" placeholder={language[localStorageLang].CONFIRM_PLACEHOLDER} />
                      {
                        validateError.confirmpassword && <span className="text-danger">{validateError.confirmpassword}</span>
                      }
                    </div>
                  </div>

                </div>

                <div className="mt-3">
                  <button type="button" onClick={registration} className="create_btn">{language[localStorageLang].CREATE_ACCOUNT}</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* register modal */}

      {/* login modal */}
      <div className="modal fade primary_modal" id="login_modal" tabIndex="-1" role="dialog" aria-labelledby="login_modalCenteredLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal" role="document">
          <div className="modal-content" id="hide"  >
            <div className="modal-header text-center">
              <h5 className="modal-title" id="login_modalLabel_1">{language[localStorageLang].LOGIN}</h5>
              <button type="button" id="closereg" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="login_form mt-3" >
                <div className="form-row">

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].EMAIL}</label>
                    <div className="mb-3">
                      <input type="text" value={loginValue.lemail} onChange={loginChange} id="lemail" className="form-control" placeholder={language[localStorageLang].EMAIL_PLACEHOLDER}/>
                      {
                        loginError.email && <span className="text-danger">{loginError.email}</span>
                      }
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="title">{language[localStorageLang].PASSWORD}</label>
                    <div className="mb-3">
                      <input type="password" value={loginValue.lpassword} onChange={loginChange} id="lpassword" className="form-control" placeholder={language[localStorageLang].PASSWORD_PLACEHOLDER} />
                      {
                        loginError.password && <span className="text-danger">{loginError.password}</span>
                      }
                    </div>
                  </div>

                </div>

                <div className="mt-3">
                  <button type="button" onClick={loginSubmit} className="create_btn">{language[localStorageLang].LOGIN}</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* login modal */}

    </header>



  )
}


export default Communityheader