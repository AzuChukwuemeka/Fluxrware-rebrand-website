import React from "react";
import Desktopnavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar(){
    return (
      <React.Fragment>
        {/* DESKTOP NAVBAR */}
        <Desktopnavbar/>
        {/* MOBILE NAVBAR */}
        <MobileNavbar />
     </React.Fragment>
    )
}