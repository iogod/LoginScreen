import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import IntroLeft from "./Introleft";
import IntroRight from "./Introright";


class Landing extends Component {
  render() {
    return (
    

     
     <div className= "Lander">
 <Grid
        container
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <IntroLeft />

        <IntroRight />
      </Grid>
     </div>
       
      
    );
  }
}

export default Landing;
