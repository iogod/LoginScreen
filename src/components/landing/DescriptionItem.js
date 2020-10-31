
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import React, { Component } from 'react'

export class DescriptionItem extends Component {
    
    constructor(props) {
        super(props)
    }
    
    
    render() {
        return (
           
             
            <Grid item xs={12} >
           
            <Typography variant= "h5" style = {{color:"white"}}>
                {this.props.children} {this.props.words}
                </Typography>
            </Grid>
            
            
        )
    }
}




export default DescriptionItem