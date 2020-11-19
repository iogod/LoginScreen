import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";

import BirthdateView from "./BirthdateView"
import VerificationView from './VerificationView';

export class PopBirthVerify extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open:false,
      pageStatus:true,
    }
  }
   
    handleClick = () => {
        this.setState((state) => {
          return {
            ...state,
            open: !state.open,
          };
        });
      };

      handleSegue = () => {
        this.setState((state) => {
          return {
            ...state,
            pageStatus: !state.pageStatus,
          };
        });
      };
  
  
   
  
    render() {
      return (
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClick}>
            {this.props.userState}
          </Button>
           <Dialog
            open={this.state.open}
            onClose={this.handleClick}
            aria-labelledby="form-dialog-title"
          >
            <AppBar position="static" style={{ flexGrow: 1 }}>
              <Toolbar>
               
                <Button color="inherit">GainApp</Button>
              </Toolbar>
            </AppBar>
      {this.state.pageStatus ? <BirthdateView handleSegue= {this.handleSegue}/> : <VerificationView handleSegue= {this.handleSegue}/> }
          
            </Dialog>
          
        </div>
      );
    }
  }

export default PopBirthVerify
