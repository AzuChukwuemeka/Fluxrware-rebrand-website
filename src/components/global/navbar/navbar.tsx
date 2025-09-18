import { Avatar, Box, Typography } from "@mui/material";
import "./nav.css"
import Link from "next/link";

export default function Navbar(){
    return (
      <Box
        sx = {{
          display: {
            xs: 'none',
            md: 'none',
            lg: 'flex'
          }
        }}
        justifySelf={"center"}
        marginTop={1}
        padding={.5}
        borderRadius={50}
        border={"1px solid #111"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        <ul>
          <li>
            <Avatar alt="Fluxrware Logo" src="./fluxware-logo.png" sx = {{width: 60, height: 60}}/>
          </li>
          
        </ul>

        <ul>
          <li>
            <Link href="/" className="active">
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                Services
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                Pricing
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                About
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                FAQs
              </Typography>
            </Link>
          </li>

        </ul>

        <ul>
          <li>
            <Link href="/" >
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Book a free Consultation
              </Typography>
            </Link>
          </li>
        </ul>
      </Box>
    )
}