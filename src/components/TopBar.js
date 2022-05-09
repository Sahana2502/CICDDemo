import { Typography } from "@mui/material";
import React from "react";

export const TopBar = ({ variant, text }) => {
  return (
    <div>
      <Typography align="center" variant={variant}>
        {text}
      </Typography>
    </div>
  );
};
