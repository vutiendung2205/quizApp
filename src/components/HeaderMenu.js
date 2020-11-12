import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import styles from './styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HeaderMenu = (props) => {
    const classes = props.classes;
    const data = useSelector( state => state.data );
    if(data.length === 0){
        return <Redirect to='/' />
    } else if(data.length !== 0) {
        return <Redirect to='/quiz' /> 
    }
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Quiz App
                </Typography>
                    <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
                        <GitHubIcon />
                    </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default withStyles(styles)(HeaderMenu);