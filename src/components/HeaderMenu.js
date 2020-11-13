import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HeaderMenu = (props) => {
    const classes = props.classes;
    const data = useSelector( state => state.data );
    return(
        <AppBar position="static">
            {
                data.length === 0 ? <Redirect to='/' /> : <Redirect to='/quiz' /> 
            }
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Quiz App
                </Typography>
                    <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
                        
                        <a href='https://github.com/vutiendung2205/quizApp' style={{ color:'white' }} target='_blank'>
                        <GitHubIcon />
                        </a>
                    </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default withStyles(styles)(HeaderMenu);