"use client";
import { google } from "googleapis";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import appendrow from "@/libs/appendRow";

export default function ExpansionForm() {
  const initFormData = {
    internetNO: "",
    province: "",
    latlongCust: "",
    latlongSP: "",
    custName: "",
    channel: "",
    amount: 0,
    tm: 0,
    custZone: "",
    problem: "",
    dealer: "",
    contact: "",
  };

  const [formData, setFormData] = useState(initFormData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = fetch("http://localhost:3000/api/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const content = await response.json();
    console.log(content);
    setFormData(initFormData);
  };

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Request Form
      </Typography> */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              id="internetNO"
              name="internetNO"
              label="Internet NO."
              fullWidth
              value={formData.internetNO}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Province</InputLabel>
              <Select
                type="text"
                value={formData.province}
                label="province"
                onChange={handleChange}
                name="province"
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
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              type="text"
              required
              id="latlongCust"
              name="latlongCust"
              label="Latitude, Logitude Customer"
              fullWidth
              value={formData.latlongCust}
              onChange={handleChange}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="off"
              type="text"
              required
              id="latlongSP"
              name="latlongSP"
              label="Latitude, Logitude SP"
              fullWidth
              value={formData.latlongSP}
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="off"
              type="text"
              required
              id="custName"
              name="custName"
              label="Customer Name"
              fullWidth
              value={formData.custName}
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Channel</InputLabel>
              <Select
                type="text"
                value={formData.channel}
                label="channel"
                onChange={handleChange}
                name="channel"
              >
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
              id="amount"
              name="amount"
              label="Splitter Amount"
              fullWidth
              value={formData.amount}
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="off"
              type="number"
              required
              id="tm"
              name="tm"
              label="Target"
              fullWidth
              variant="standard"
              value={formData.tm}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Customer Zone</InputLabel>
              <Select
                type="text"
                value={formData.custZone}
                label="custZone"
                onChange={handleChange}
                name="custZone"
              >
                <MenuItem value={"Central North"}>Central North</MenuItem>
                <MenuItem value={"Central West"}>Central West</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Problem</InputLabel>
              <Select
                type="text"
                value={formData.problem}
                label="Problem"
                onChange={handleChange}
                name="problem"
              >
                <MenuItem value={"Splitter Full"}>Splitter Full</MenuItem>
                <MenuItem value={"Over Distance"}>Over Distance</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Dealer</InputLabel>
              <Select
                type="text"
                value={formData.dealer}
                label="Dealer"
                onChange={handleChange}
                name="dealer"
              >
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
              id="contact"
              name="contact"
              label="Contact Phone"
              fullWidth
              value={formData.contact}
              variant="standard"
              onChange={handleChange}
              // error={!validatePhoneNumber(formData.contact)}
              // helperText={
              //   !validatePhoneNumber(formData.contact)
              //     ? "Invalid phone number"
              //     : ""
              // }
            />
          </Grid>

          {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="submit" variant="contained" sx={{ mt: 3, ml: 2 }}>
            {/* {activeStep === steps.length - 1 ? 'Place order' : 'Next'} */}
            Submit
          </Button>
        </Box>
      </form>
    </React.Fragment>
  );
}
