import React from "react";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Button as MaterialButton } from "@mui/material";
import { TopBar } from "./TopBar";
import { styled } from "@mui/material/styles";
import { useEditor } from "@craftjs/core";
import { Button } from "./Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ToolBox = () => {
  const { connectors, query } = useEditor();
  return (
    <Box margin={5} bgcolor="#cbe8e7">
      <TopBar text={"Drag from here"} variant="h6" />
      <div style={{ margin: "0 auto", width: "300px", height: "300px" }}>
        <Stack marginTop={4} marginBottom={4} spacing={2}>
          <Item>
            <MaterialButton
              ref={(ref) => connectors.create(ref, <Button text="Click me" />)}
            >
              Button
            </MaterialButton>
          </Item>
          <Item>
            <MaterialButton>Text</MaterialButton>
          </Item>
        </Stack>
      </div>
    </Box>
  );
};
