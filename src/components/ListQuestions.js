import { Button, Container, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from './Question';
import { getCorrectAnswer, isShowAnswer, showResult } from '../Slices/ResultsSlice'
import { getData } from '../Slices/DataSlice';
import { isShowNotiDialog } from '../Slices/NotiDialogSlice';
import styles from './styles';
import DragTimer from './DragTimer';
import { getTime, stopT } from '../Slices/TimerSlice';
import Draggable from 'react-draggable';

const ListQuestions = (props) => {
    const dispatch = useDispatch();
    const classes = props.classes;
    const data = useSelector( state =>state.data );
    const isShowTimer = useSelector( state =>state.timer.open );
    const showAnswer = useSelector(state=>state.results.showAnswer);
    const openResults = useSelector(state=>state.results.open);
    const handleSubmit = () => {
        let flag = true;
        for(let i = 0;i<data.length;i++){
            if(data[i].playerAnswerIs === ''){
                flag =false;
                break;
            }
        }
        if(flag){
            dispatch( getCorrectAnswer(data) );
            dispatch( showResult() );
            dispatch( stopT() );

        } else{
            dispatch( isShowNotiDialog() )
        }
        
        
    }
    const handleBackToHome = () =>{
        dispatch( getData([]) );
        dispatch( isShowAnswer() )
    }

    const [drag, setdrag] = useState({
        activeDrags: 0,
    })
    const onStart = () => {
        setdrag({activeDrags: ++drag.activeDrags});
      };
    
    const onStop = () => {
        setdrag({activeDrags: --drag.activeDrags});
      };

    const [seconds, setSeconds] = useState(0);
    const startTimer = useSelector(state=>state.timer.open)
    useEffect(() => {
        if(startTimer===true && openResults === false){
            const interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                }, 1000);
            return () => clearInterval(interval);
        }
        if(openResults===true && startTimer===false ){
            dispatch( getTime(seconds) )
        }
        
    },[startTimer,openResults]);
    // if(openResults===true && startTimer===false ){
    //     dispatch( getTime(seconds) )
    // }
    let minutes = Math.floor(seconds/60);
  return (
    <React.Fragment>
        {/* <DragTimer /> */}
        {
            isShowTimer === true ? <Draggable 
            onStart={onStart}
            // onDrag={handleDrag}
            onStop={onStop}
            bounds="parent"
        >
            <span className={classes.draggable}>
                {
                    minutes < 10 ? `0${minutes} ` : `${minutes} `
                }: 
                {
                    seconds%60 < 10 ? ` 0${seconds%60}` : ` ${seconds%60}`
                }
            </span>
        </Draggable>
         : null
        }
        

        <Container maxWidth="md">
        <h1>Your Questions</h1>
        {
            data.map( (value,index)=>{
                return(
                    <Question
                    key={index}
                    question={value.question}
                    answers={value.answers}
                    correct_answer={value.correct_answer}
                    number={index}
                    />
                )
            } )
        }
        </Container>
        {
            (showAnswer===true && openResults===false) ? <Button style={{marginBottom:'30px'}} type='button' onClick={handleBackToHome} variant="contained" color="secondary">Return to home page</Button>:
            <Button type='button' onClick={handleSubmit} style={{marginBottom:'30px'}}  variant="contained" color="secondary">Submit</Button> 
            
        }
    </React.Fragment>
  );
}
export default withStyles(styles)(ListQuestions);