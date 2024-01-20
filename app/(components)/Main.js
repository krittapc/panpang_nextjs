"use client"

import MenuAppBar from "./MenuAppBar";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { signIn, signOut, useSession } from "next-auth/react";

import React from "react";

function Main() {
  const { data: session } = useSession();

  return <div>{session ? <ResponsiveDrawer /> : <MenuAppBar />}</div>;
}

export default Main;
