import React from "react";
import { Button as MaterialButton } from "@mui/material";
import { useNode } from "@craftjs/core";

export const Button = ({ text }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      <MaterialButton sx={{ m: 5 }} variant="contained">
        {text}
      </MaterialButton>
    </div>
  );
};
