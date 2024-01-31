"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useFormState } from "react-dom";
import { create } from "@/action";
import { useLiff } from "./LiffProvider";

const initialState = {
  message: null,
};

export default function ExpansionForm({ setOpen, profile }) {
  console.log("expansion userId: " + profile.userId)
  const [state, formAction] = useFormState(create, initialState);
  // const [profile, setProfile] = useState(null);
  // const { liff } = useLiff();

  return (
    <>
      <form
        action={async (formData) => {
          await formAction(formData);
          console.log(state.message);
          setOpen(false);
        }}
      >
        {profile && (
          <>
            <input type="hidden" name="userId" value={profile.userId} />
            <input
              type="hidden"
              name="displayName"
              value={profile.displayName}
            />
          </>
        )}
        {/* {profile && (
          <div>
            <Typography name="userId" value={profile.userId}></Typography>
            <Typography
              name="displayName"
              value={profile.displayName}
            ></Typography>
          </div>
        )} */}

        <Grid container spacing={3}>
          <Grid item xs={6} sm={6}>
            <FormControl variant="standard" fullWidth required>
              <InputLabel>Customer Zone</InputLabel>
              <Select type="text" label="custZone" name="custZone">
                <MenuItem value={"Central North"}>Central North</MenuItem>
                <MenuItem value={"Central West"}>Central West</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
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
          <Grid item xs={6} sm={6}>
            <TextField
              autoComplete="off"
              type="text"
              required
              name="latlongSP"
              label="La-Long SP"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              autoComplete="off"
              type="text"
              required
              name="latlongCust"
              label="La-Long Customer"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl variant="standard" fullWidth required>
              <InputLabel>Problem</InputLabel>
              <Select type="text" label="Problem" name="problem">
                <MenuItem value={"Splitter Full"}>Splitter Full</MenuItem>
                <MenuItem value={"Over Distance"}>Over Distance</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              type="text"
              name="internetNO"
              label="Internet NO."
              fullWidth
              variant="standard"
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl variant="standard" fullWidth required>
              <InputLabel>Channel</InputLabel>
              <Select type="text" label="channel" name="channel">
                <MenuItem value={"FBB Sale"}>FBB Sale</MenuItem>
                <MenuItem value={"FBB Dealer"}>FBB Dealer</MenuItem>
                <MenuItem value={"FBB Marketing"}>FBB Marketing</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
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
          <Grid item xs={6} sm={6}>
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
          <Grid item xs={6} sm={6}>
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
          <Grid item xs={6} sm={6}>
            <FormControl variant="standard" fullWidth required>
              <InputLabel>Province</InputLabel>
              <Select
                type="text"
                label="province"
                name="province"
                defaultValue=""
              >
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
          <Grid item xs={6} sm={6}>
            <TextField
              autoComplete="off"
              type="text"
              required
              name="contact"
              label="Sale Contact"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Remark"
              autoComplete="off"
              multiline
              rows={4}
              variant="standard"
              name="remark"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, ml: 2 }}>
            Submit
          </Button>
        </Box>
        {/* {state?.message && (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {state?.message}
          </Alert>
        </Snackbar>
      )} */}
      </form>
    </>
  );
}
