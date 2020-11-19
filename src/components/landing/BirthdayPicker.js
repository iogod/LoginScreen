import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export class BirthdayPicker extends Component {


    constructor(props) {
        super(props)
    }
 
    render() {

        return (
            <div>
         <FormControl variant="filled" style={{minWidth:"130px"}}  >
        <InputLabel id="demo-simple-select-filled-label">{this.props.title}</InputLabel>
        <Select
        native
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name = {this.props.title}
         value= {this.props.val}
          onChange = {(e)=> this.props.changeSelected(e)}
        >
       <option aria-label="None" value="" />
         {this.props.choices}
         {()=> {console.log(this.props.choices)}}
    
        </Select>
      </FormControl>
            </div>
        )
    }
}

export default BirthdayPicker
