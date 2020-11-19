import React from "react";
import logo from "../../media/bulls.jpg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import FacebookIcon from "@material-ui/icons/Facebook";

import PopBirthVerify from "./PopBirthVerify"

const Introright = () => {
  const [alignment, setAlignment] = React.useState("left");
  const spacing = { marginTop: "1%" };
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Grid container justify="center" xs={12} md={6}>
      <Grid style={spacing} item xs={12}>
        <img
          src={logo}
          alt="Bulls"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "30px",
            height: "30px",
          }}
        ></img>
      </Grid>

      <Grid style={spacing} item xs={12} md={6}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            variant="contained"
            value="left"
            aria-label="left aligned"
          >
            SignUp
          </ToggleButton>
          <ToggleButton
            variant="contained"
            value="center"
            aria-label="centered"
          >
            SignIn
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>

      <Grid style={spacing} item xs={12}>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Phone Number or Email"
          variant="filled"
          style={{ width: "50%" }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Password"
          variant="filled"
          style={{ width: "50%" }}
        />
      </Grid>

      <Grid item xs={12}>
        {alignment === "left" && (
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Name"
            variant="filled"
            color="secondary"
            style={{ width: "50%" }}
          />
        )}
      </Grid>

      <Grid style={spacing} item xs={12}>
   
        <PopBirthVerify userState={alignment === "left" ? " Sign Up" : " Sign In"}></PopBirthVerify>
      </Grid>

      <Grid item className="Sign" xs={12}>
        <hr style={{ width: "50%" }}></hr>
      </Grid>

      <Grid t={100} className="Sign" item xs={12} md={12}>
        <Button variant="contained" color="primary">
          <FacebookIcon /> {alignment === "left" ? " Sign Up" : " Sign In"} With
          Facebook
        </Button>
      </Grid>
    </Grid>
  );
};

export default Introright;
