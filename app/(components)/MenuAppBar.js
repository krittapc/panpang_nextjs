"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";

export default function MenuAppBar() {
  const router = useRouter();

  const { data: session } = useSession();
  const handleSignOut = async () => {
    await signOut("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PanPang :)
          </Typography>
          {session && (
            <>
              <Avatar alt={session.user.name} src={session.user.image} />
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
