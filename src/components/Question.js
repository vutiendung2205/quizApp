import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { escapeStr } from '../Shared';
import { useDispatch, useSelector } from 'react-redux';
import { editAnswer } from '../Slices/DataSlice';

const Question = (props) => {
    const dispatch = useDispatch();
    const showAnswer = useSelector(state=>state.results.showAnswer)
    const { classes, number, answers, question, correct_answer} = props;
    const handleChange = (e) => {
        let data = {
            question    : question,
            answer      : e.target.value
        }
        dispatch( editAnswer(data) )
      };
    return(
        <React.Fragment>
            <FormControl className={classes.Form_Question}>
            <FormLabel className={classes.question} >Question {number+1} : {escapeStr(question)}</FormLabel>
                <RadioGroup  name="gender1" value={undefined} onChange={handleChange}>
                    {
                        answers.map( (value,index) =>{
                            if(showAnswer === true){
                                if( value === correct_answer ){
                                    return(
                                        <FormControlLabel className={classes.showAnswer}  key={index} value={value} control={<Radio />} label={escapeStr(value)} />
                                    )
                                } else {
                                    return(
                                        <FormControlLabel className={classes.disabledAnswer} disabled key={index} value={value} control={<Radio />} label={escapeStr(value)} />
                                    )
                                }
                            }else{
                                return(
                                    <FormControlLabel key={index} value={value} control={<Radio />} label={escapeStr(value)} />
                                )
                            }
                            
                        } )
                    }
                </RadioGroup>
            </FormControl>
        </React.Fragment>
    )
};
export default withStyles(styles)(Question);