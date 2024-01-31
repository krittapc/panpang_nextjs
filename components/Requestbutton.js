"use client";
import { Button, Container } from "@mui/material";
import React from "react";
import { useLiff } from "./LiffProvider";

function Requestbutton({ setOpen }) {
  const { liff } = useLiff();

  const handleClick = () => {
    // await liff?.login()
    setOpen(true);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={handleClick} variant="outlined">
        Request
      </Button>
    </Container>
  );
}

export default Requestbutton;
