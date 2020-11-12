import { Button, Container } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Question from './Question';
import { getCorrectAnswer, isShowAnswer, showResult } from '../Slices/ResultsSlice'
import { getData } from '../Slices/DataSlice';
import { isShowNotiDialog } from '../Slices/NotiDialogSlice';

const ListQuestions = (props) => {
    const dispatch = useDispatch();
    const data = useSelector( state =>state.data );
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
            dispatch( showResult() )
        } else{
            dispatch( isShowNotiDialog() )
        }
        
        
    }
    const handleBackToHome = () =>{
        dispatch( getData([]) );
        dispatch( isShowAnswer() )
    }
  return (
    <React.Fragment>

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
            (showAnswer===true && openResults===false) ? <Button type='button' onClick={handleBackToHome} variant="contained" color="secondary">Return to home page</Button>:
            <Button type='button' onClick={handleSubmit} variant="contained" color="secondary">Submit</Button> 
            
        }
        
    </React.Fragment>
  );
}
export default ListQuestions;