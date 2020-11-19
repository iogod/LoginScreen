import React, { Component } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export class VerificationView extends Component {
  render() {
    return (
      <div>
        <DialogContent>

         <Button onClick= {this.props.handleSegue}> 
             {"< Back"}
         </Button>
          <DialogContentText>Please</DialogContentText>

          <TextField autoComplete= "off" id="outlined-basic" label="Confirmation Code" variant="outlined" />
          <Button>Submit</Button>

          <Button onClick= {this.props.handleSegue}> Resend Code</Button>
          <Button onClick= {this.props.handleSegue}> Cancel </Button>

        </DialogContent>
        
      </div>
    );
  }
}

export default VerificationView;
