import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const labelColor = theme.palette.neutral.label;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      m="2rem 0 3rem 0"
    >
      <Typography fontSize="14px" color={labelColor}>
        FIT3161 Group 2 © 2022
      </Typography>
    </Box>
  );
};

export default Footer;
