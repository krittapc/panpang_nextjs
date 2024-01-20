"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Typography } from "@mui/material";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();
  

  if (session && session.user) {
    return (
      <div>
        <Link href="/home">
          <Button variant="contained" onClick={() => signOut()}>
            Sign Out
          </Button>
        </Link>
        <Typography>{session.user.name}</Typography>
      </div>
    );
  }

  return (
    <Button variant="contained" onClick={() => signIn()}>
      Sign In
    </Button>
  );
};

export default SigninButton;
