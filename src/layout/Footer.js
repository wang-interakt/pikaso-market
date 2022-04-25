import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Select from "react-select";
import { language } from "../pages/language";
// import {newsletter} from '../actions/community';
// import { toastAlert }  from "../actions/toastAlert";

import { toast } from "react-toastify";

toast.configure();
/* let toasterOption = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  } */

/* const initialFormValue = {
    'email': "",
  } */

const Footer = () => {
  const options = [
    { value: "English", label: "English" },
    { value: "Japanese", label: "Japanese" },
    { value: "Chinese", label: "Chinese" },
    { value: "Korean", label: "Korean" },
    { value: "Spanish", label: "Spanish" },
  ];

  const [select, setSelectedOption] = useState(options[0].value);
  const history = useHistory();
  // const [formValue, setFormValue]= useState(initialFormValue);

  var localStorageLang = localStorage.getItem("lang");
  if (localStorageLang === null) {
    localStorageLang = "Japanese";
  }

  /* const onChange = (e) => {
    e.preventDefault();
   const { id, value } = e.target;
   let formData = { ...formValue, ...{ [id]: value } }
   setFormValue(formData)
 } */
  // const {
  //   email
  //   } = formValue

  // const handlenewsletter = async (e) => {
  //   e.preventDefault();
  //    if(email !=""){
  //     let reqData={
  //           email
  //       }
  //       const {error,result,status} = await newsletter(reqData);
  //       if(status){
  //         toastAlert('success',"Successfully subscribe",'error');
  //         let formData = { ...formValue, ...{ email: "" } }
  //         setFormValue(formData)
  //       }else{
  //         toastAlert('error',"Email id already exists",'error');
  //       }

  //   }else{
  //       toastAlert('error',"Please Enter email id",'error');
  //   }

  // }

  const handleChange = (SelectedOption) => {
    setSelectedOption(SelectedOption.value);
    localStorage.setItem("lang", SelectedOption.value);
    //window.location.reload(true)
    history.push(window.location.pathname);
    window.scrollTo(0,0);
  };

  return (
    <footer className="pt-50 pb-15">
      <Container fluid className="padding-lr-custom-50">
        <Row className="ml-0 mr-0">
          <Col md={12}>
            <Col md={3} sm={6}>
              <div className="footer-logo">
                <Image
                  src="/images/pikaso_new_logo.png"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="quick-link">
                <h4>{language[localStorageLang].QUICKS}</h4>
                <ul >
                  {/* <li>
                    <Link to="/about-us" style={{color:"black"}}>
                      {language[localStorageLang].ABOUT}
                    </Link>
                  </li> */}
                    <li>
                      <Link to="/PKS-token" style={{color:"black"}}>{language[localStorageLang].PKS_token}</Link>
                   </li>
                  <li>
                    <Link to="/" style={{color:"black"}}>
                      {language[localStorageLang].EXPLORE}
                    </Link>
                  </li>
                  <li>
                    <Link to="/how-it-works" style={{color:"black"}}>
                      {language[localStorageLang].HOW_IT_WORKS}
                    </Link>
                  </li>
                  {/* <li>
                  <Link to="/support">{language[localStorageLang].SUPPORT}</Link>
                </li> */}
                </ul>
              </div>
            </Col>
            {/* <Col md={3} sm={6}>
            <div className="community">
              <h4>{language[localStorageLang].COMMUNITY}</h4>
              <ul>
                
                <li>
                  <a href="/discussion" target="_blank">{language[localStorageLang].DISCUSSION}</a>
                </li>
                <li>
                  <Link to="/voting">{language[localStorageLang].VOTING}</Link>
                </li>
                <li>
                  <Link to="/suggest">{language[localStorageLang].SUGGEST}</Link>
                </li>
              </ul>
            </div>
          </Col> */}
            <Col md={3} sm={6}>
              <div className="social-media">
                <h4>{language[localStorageLang].SOCIAL_MEDIA}</h4>
                <ul>
                  <li>
                    <Link
                      to={{ pathname: "https://www.facebook.com/pikasomarket" }}
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{
                        pathname: "https://www.instagram.com/pikaso_market/",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={{ pathname: "https://twitter.com/pikaso_official" }}
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to={{
                        pathname:
                          "https://www.youtube.com/channel/UChsaJzaT5iTjVgTCB-cKP4w",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-youtube"></i>
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to={{
                        pathname:
                          "https://www.linkedin.com/company/pikasoofficial",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="Language">
                <h4>{language[localStorageLang].LANGUAGE}</h4>
                <Select
                  value={select.value}
                  // defaultValue = {options[0].value}
                  placeholder="Japanese"
                  onChange={handleChange}
                  options={options}
                  style={{height:3}}
                />
              </div>
            </Col>
            {/* <Col md={3} sm={6}>
            <div className="Newsletter">
              <h4>Newsletter</h4>
              <input type="email"  id="email" name="email" onChange={onChange}  className="form-control" placeholder="Enter your email"  />
              <button type="submit" className="connect-wallet create-item" onClick={handlenewsletter}>Submit</button>
            </div>
          </Col> */}
          </Col>
        </Row>
        <Row className="ml-0 mr-0">
          <Col md={12}>
            <hr />
            <Col md={6} sm={6}>
              <p className="copyrights">{language[localStorageLang].ENDLINE}</p>
            </Col>
            <Col md={6} sm={6}>
              <div className="li-copy">
                <ul>
                  <li>
                    <Link to="/terms_and_conditions">
                      {language[localStorageLang].TERMS_CONDITIONS}
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy_policy">
                      {language[localStorageLang].PRIVACY_POLICY}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
