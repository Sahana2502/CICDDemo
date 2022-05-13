import { MyEditor } from "./components/MyEditor";
import React from "react";
import { ToolBox } from "./components/ToolBox";
import Grid from "@mui/material/Grid";
import { Editor, Frame, Element } from "@craftjs/core";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { TopBar } from "./components/TopBar";

export default function App() {
  return (
    <Editor resolver={{ Button, Text, MyEditor, TopBar }}>
      <Grid container spacing={2}>
        <Grid item xs={8} mt={4}>
          <TopBar text={"Drop Here"} variant="h4" />
          <Frame>
            {/* This doesn't work!! */}
            <Element is={MyEditor} canvas>
              <Button text={"Hello!"} />
            </Element>
          </Frame>
        </Grid>
        <Grid item xs={4}>
          <ToolBox />
        </Grid>
      </Grid>
    </Editor>
  );
}
