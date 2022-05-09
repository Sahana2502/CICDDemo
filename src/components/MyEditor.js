import React from "react";
import { useNode } from "@craftjs/core";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const MyEditor = ({ children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div>
      <Container maxWidth="sm" ref={(ref) => connect(drag(ref))}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "80vh" }}>{children}</Box>
      </Container>
    </div>
  );
};
