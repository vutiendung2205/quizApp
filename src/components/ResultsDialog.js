import { withStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { showResult,isShowAnswer } from '../Slices/ResultsSlice';
import { getData } from '../Slices/DataSlice';


const ResultsDialog = (props) => {
    const dispatch = useDispatch()
    const classes = props.classes;
    const results = useSelector(state=>state.results);
    const data = useSelector(state=>state.data);
    const seconds = useSelector(state=>state.timer.time);
    const minutes = Math.floor(seconds/60);
    const reviewAnswers = () => {
        dispatch( showResult() );
        dispatch( isShowAnswer() )
    }
    const handleNewQuiz = () => {
        dispatch( getData([]) );
        dispatch( showResult() )
    }
    console.log(data.length)
    return(
        <Dialog
        open={results.open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={reviewAnswers}
        aria-labelledby="quizInfomation"
      >
            <DialogTitle className={classes.quizInfomation} id="quizInfomation">{"Quiz Infomation"}</DialogTitle>

            <DialogContent>
                <p>Topic: <span className={classes.resultsDsc}>{results.topic}</span></p>
                <p>Correct Answer: <span className={classes.resultsDsc}>{results.correctAnswer}</span></p>
                <p>Total questions: <span className={classes.resultsDsc}>{data.length}</span></p>
                <p>Time: <span className={classes.resultsDsc}>
                    {
                        minutes < 10 ? `0${minutes} ` : `${minutes} `
                    }: 
                    {
                        seconds%60 < 10 ? ` 0${seconds%60}` : ` ${seconds%60}`
                    }
                </span></p>
                <p>Score: <span className={classes.resultsDsc}>{Math.round(results.correctAnswer*100/data.length)} %</span></p>
            </DialogContent>

            <DialogActions  className={classes.dialogAction}>
                <Button className={classes.result_btn} onClick={reviewAnswers} variant="contained" color="primary">
                    Review answers
                </Button>
                <Button className={classes.result_btn} onClick={handleNewQuiz} variant="contained" color="secondary">
                    New Quiz
                </Button>
            </DialogActions>
      </Dialog>
    )
};
export default withStyles(styles)(ResultsDialog);