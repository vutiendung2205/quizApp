import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { isShowNotiDialog } from '../Slices/NotiDialogSlice';
import { showResult } from '../Slices/ResultsSlice';


const NotiDialog = (props) => {
    const classes = props.classes;
    const dispatch = useDispatch();
    const handleClose = () => {
        console.log('handleClose');
        dispatch( isShowNotiDialog() )
    }
    const handleSubmit = () => {
        // trả về dialog kết quả
        dispatch( isShowNotiDialog() );
        dispatch( showResult() )
    }
    const open = useSelector(state=>state.notiDialog.showNotiDialog)
    return(
        <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            Some questions have not been answered. Do you want to finish?
            </DialogContentText>
        </DialogContent>

        <DialogActions className={classes.dialogAction}>
            <Button onClick={handleSubmit} color="primary">
                Yes
            </Button>
            <Button onClick={handleClose} color="primary">
                No
            </Button>
        </DialogActions>

      </Dialog>
    )
}
export default withStyles(styles)(NotiDialog);