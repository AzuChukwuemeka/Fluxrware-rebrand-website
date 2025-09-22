import { Theme, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import Desktopnavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar(){
  const theme : Theme = useTheme();
    return (
      <React.Fragment>
        {/* DESKTOP NAVBAR */}
        <Desktopnavbar/>
        {/* MOBILE NAVBAR */}
        <MobileNavbar />
     </React.Fragment>
    )
}