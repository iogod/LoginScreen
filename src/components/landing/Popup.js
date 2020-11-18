import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CakeIcon from '@material-ui/icons/Cake';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NumberPicker from "./Numpicker"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

      <AppBar position="static" style={{flexGrow:1}}>
        <Toolbar>
          
        <DialogTitle id="form-dialog-title"> <CakeIcon/> Birthday </DialogTitle>
          <Button color="inherit">Next</Button>
        </Toolbar>
      </AppBar>
      
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
          <NumberPicker/>
          <NumberPicker/>
          <NumberPicker/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}