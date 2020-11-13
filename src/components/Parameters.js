import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles';
import Button from '@material-ui/core/Button';
import { GetQuestionsRequest } from '../Api';
import { Redirect } from 'react-router-dom';
import { startT } from '../Slices/TimerSlice';
// import { Redirect } from 'react-router-dom';

const Parameters = (props) => {
    const dispatch = useDispatch()
    const listCategory = [
        'General Knowledge','Entertainment: Books','Entertainment: Film','Entertainment: Music',
        'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games',
        'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics',
        'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals',
        'Vehicles', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Japanese Anime & Manga',
        'Entertainment: Cartoon & Animations',
    ]
    const classes = props.classes;
    const [parameters, setParameters] = useState({
        category    : 9,
        level       : 'easy',
        number      : 10
    })
    const handleChange = (e) => {
        setParameters({...parameters,[e.target.name]:e.target.value})
    }
    const handleSubmit = () => {
        let { category,level,number } = parameters;
        dispatch( GetQuestionsRequest(category,level,number) );
        dispatch( startT() )
    }
    const data = useSelector(state => state.data);
    return(
            <div className={classes.container_1}>
                <h1>Wellcome to Quiz</h1>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="category">
                        Categogy
                    </InputLabel>
                    <Select
                        labelId="category"
                        id="category"
                        name='category'
                        value={parameters.category}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        
                        {
                            listCategory.map( (value,index) =>{
                                return(
                                    <MenuItem key={index} value={index+9}>{value}</MenuItem>
                                )
                            } )
                        }
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="level">
                        Level
                    </InputLabel>
                    <Select
                        labelId="level"
                        id="level"
                        name='level'
                        value={parameters.level}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value='easy'>Easy</MenuItem>
                        <MenuItem value='medium'>Medium</MenuItem>
                        <MenuItem value='hard'>Hard</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="numberQuestions">
                        Number of Questions
                    </InputLabel>
                    <Select
                        labelId="numberQuestions"
                        id="numberQuestions"
                        name='number'
                        value={parameters.number}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                    Let's start!
                    </Button>
                </div>
            </div>
    )
}
export default withStyles(styles)(Parameters);