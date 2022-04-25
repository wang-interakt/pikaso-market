import React, { useEffect, useRef, useState }  from "react";

import { useWeb3Context } from "../web3/web3-context";
import { formatAddress,trim } from "../web3/helpers/format-string"
import { DownOutlined } from '@ant-design/icons';
import "./connect-menu.css"

const ConnectMenu = () => {

  const buttonRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  const { connected ,balance, symbol, connect, disconnect, checkWrongNetwork, address, switchNetwork } = useWeb3Context();

  useEffect(() => {
    window.addEventListener("mousedown", handleOutClick);
    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    }
  }, [])

  const handleOutClick = (e) => {
    if(buttonRef.current && buttonRef.current.contains(e.target)) {
      return;
    }
    setShowMenu(false);
  }

  const handleDropMenu = () => {
    setShowMenu(prev => !prev);
  }

  var clickFunc = connect;
  var buttonTxt = "Sign In";

  if(connected) {
    clickFunc = handleDropMenu;
    buttonTxt = 
        <div style={{display:"flex", alignItems:"center"}}>
            <div style={{marginRight:10}}>
                <span ><b>{trim(String(balance),6) + " "}</b></span>
                <span>{symbol}</span>
                <p style={{color:"#686869",fontSize:"12px", margin: 0}}>{formatAddress(address)}</p>
            </div>
            <div>
                <DownOutlined />
            </div>
        </div>
  } 

  if(connected && checkWrongNetwork()) {
    clickFunc = switchNetwork("0x89");
    buttonTxt = "Switch Network";
  }
  
  return (
    <div>
        <div className="connect-btn-wrapper" ref={buttonRef}>
            <button onClick={clickFunc} className="connect-wallet-btn" style={{backgroundColor : !connected || checkWrongNetwork() ? "#337AB7": ""}}>
                { buttonTxt }
            </button>
            <>
                {  // connet button drop-down menu
                connected && showMenu && (
                    <div className="connect-drop-modal">
                    <div className="drop-modal-header">
                        <b>{"address : " + formatAddress(address)}</b>
                    </div>
                    <div className="drop-modal-body">
                        <p>My Items</p>
                        <p>Edit profile</p>
                    </div>
                    <div className="drop-modal-footer" onClick={disconnect}>
                        Disconnect
                    </div>
                    </div>
                )
                }
            </>
        </div>
    </div>
  );
};

export default ConnectMenu;
