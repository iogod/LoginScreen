import React from "react";
import DescriptionItem from "../landing/DescriptionItem";
import Grid from "@material-ui/core/Grid";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const icons = [AccessibilityIcon, AcUnitIcon, AccountBalanceWalletIcon];
const toDos = [
  "Get in shape right now",
  "Join the CLub Today!",
  "Click the Button to make it Fun!!!",
];
const styler = { marginTop: "30px", fontSize: "100%",color:"red" };
const test = icons.map((Joint, index) => {
  return (
    <DescriptionItem key={index} words={toDos[index]}>
     
      <Joint style={styler} />
    </DescriptionItem>
  );
});

const Introleft = () => {
  return (
    
      <Grid container justify="space-around" item xs={12} md={6} >
        {test}
      </Grid>
  
  );
};

export default Introleft;
