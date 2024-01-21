"use client";

import React, { useEffect, useState, useRef } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { useFormState } from "react-dom";
import { create } from "@/lib/action";
import { useRouter } from "next/navigation";

const initialState = {
  message: null,
};

export default function ExpansionForm() {
  const [state, formAction] = useFormState(create, initialState);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const formRef = useRef(null);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  // useEffect(() => {
  //   formRef.current.reset();

  //   // if (state?.success && state?.message) {
  //   //   // router.push("/login");
  //   // }
  // }, [state?.success]);

  return (
    <form
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset();
        setOpen(true);
        router.push("/home")
        console.log(state.message)
      }}
      ref={formRef}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="off"
            type="text"
            required
            name="custName"
            label="Customer Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Province</InputLabel>
            <Select type="text" label="province" name="province" defaultValue="">
              <MenuItem value={"Kanchanaburi"}>Kanchanaburi</MenuItem>
              <MenuItem value={"Nakhon Pathom"}>Nakhon Pathom</MenuItem>
              <MenuItem value={"Samut Sakhon"}>Samut Sakhon</MenuItem>
              <MenuItem value={"Samut Songkhram"}>Samut Songkhram</MenuItem>
              <MenuItem value={"Phetchaburi"}>Phetchaburi</MenuItem>
              <MenuItem value={"Ratchaburi"}>Ratchaburi</MenuItem>
              <MenuItem value={"Prachuap Khiri Khan"}>
                Prachuap Khiri Khan
              </MenuItem>
              <MenuItem value={"Suphan Buri"}>Suphan Buri</MenuItem>
              <MenuItem value={"Sing Buri"}>Sing Buri</MenuItem>
              <MenuItem value={"Phra Nakhon Si Ayutthaya"}>
                Phra Nakhon Si Ayutthaya
              </MenuItem>
              <MenuItem value={"Ang Thong"}>Ang Thong</MenuItem>
              <MenuItem value={"Sing Buri"}>Sing Buri</MenuItem>
              <MenuItem value={"Suphan Buri"}>Suphan Buri</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            type="text"
            required
            name="latlongCust"
            label="Latitude, Logitude Customer"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            autoComplete="off"
            type="text"
            required
            name="latlongSP"
            label="Latitude, Logitude SP"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="text"
            name="internetNO"
            label="Internet NO."
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Channel</InputLabel>
            <Select type="text" label="channel" name="channel">
              <MenuItem value={"FBB Sale"}>FBB Sale</MenuItem>
              <MenuItem value={"FBB Dealer"}>FBB Dealer</MenuItem>
              <MenuItem value={"FBB Marketing"}>FBB Marketing</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="off"
            type="number"
            required
            name="amount"
            label="Splitter Amount"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="off"
            type="number"
            required
            name="tm"
            label="Target"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Customer Zone</InputLabel>
            <Select type="text" label="custZone" name="custZone">
              <MenuItem value={"Central North"}>Central North</MenuItem>
              <MenuItem value={"Central West"}>Central West</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Problem</InputLabel>
            <Select type="text" label="Problem" name="problem">
              <MenuItem value={"Splitter Full"}>Splitter Full</MenuItem>
              <MenuItem value={"Over Distance"}>Over Distance</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Dealer</InputLabel>
            <Select type="text" label="Dealer" name="dealer">
              <MenuItem value={"Anawin"}>Anawin</MenuItem>
              <MenuItem value={"Ploy.Pin.Poon"}>Ploy.Pin.Poon</MenuItem>
              <MenuItem value={"SiamNeon"}>SiamNeon</MenuItem>
              <MenuItem value={"Zoom TH."}>Zoom TH.</MenuItem>
              <MenuItem value={"APS"}>APS</MenuItem>
              <MenuItem value={"Thebest Internetwork"}>
                Thebest Internetwork
              </MenuItem>
              <MenuItem value={"Icevast"}>Icevast</MenuItem>
              <MenuItem value={"Western Corp."}>Western Corp.</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="off"
            type="text"
            required
            name="contact"
            label="Contact Phone"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button type="submit" variant="contained" sx={{ mt: 3, ml: 2 }}>
          Submit
        </Button>
      </Box>
      {state?.message && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {state?.message}
          </Alert>
        </Snackbar>
      )}
    </form>
  );
}
