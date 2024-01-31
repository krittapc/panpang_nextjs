"use client";
import { useState, useContext, useCallback, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import ExpansionForm from "@/components/ExpansionForm";
import { Container, Paper, Typography } from "@mui/material";
import Requestbutton from "@/components/Requestbutton";
import { useLiff } from "../components/LiffProvider";

export default function Home() {

  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const { liff } = useLiff();

  useEffect(() => {
    if (liff?.isLoggedIn()) {
      (async () => {
        const profile = await liff.getProfile();
        setProfile(profile);
        console.log("userId: " + profile.userId)
      })();
    } else {
      liff?.login();
    }
  }, [liff]);
  return (
    <>
      <CssBaseline />
      {/* {profile && (
        <>
          eslint-disable-next-line @next/next/no-img-element,
          <img src={profile.pictureUrl} alt="profile" />
          <p>userId: {profile.userId}</p>
          <p>displayName: {profile.displayName}</p>
        </>
      )} */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {!open ? (
          <Requestbutton setOpen={setOpen} />
        ) : (
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Request Expansion
            </Typography>
            <ExpansionForm setOpen={setOpen} profile={profile} />
          </Paper>
        )}
      </Container>
    </>
  );
}
