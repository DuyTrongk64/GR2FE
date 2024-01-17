import React from "react";
import Logo from "../logoLetter/logoLetter";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#262626", height: 127, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{}}>
        <Logo color="white" />
      </Box>
    </Box>
  );
};

export default Footer;
