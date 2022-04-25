import React, { useEffect, useRef, useState }  from "react";
import ConnectMenu from "../component/connect-menu";

const Header = () => {

  return (
    <div style={{display:"flex",justifyContent: "end"}}>
      <ConnectMenu/>
    </div>
  );

};

export default Header;
