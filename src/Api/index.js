import axios from 'axios';
import { shuffleArray } from '../Shared';
import { getData } from '../Slices/DataSlice';
import { getDifficulty, getTopic } from '../Slices/ResultsSlice';
// import { URL } from '../constants/index';

//  get questions
export const GetQuestionsRequest = (category,level,number) =>{
    return (dispatch)=>{
        axios({
            method: 'GET',
            url: `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${level}&type=multiple`
        })
        .then( res=>{
            let data = res.data.results.map( (value) => {
                let answers = shuffleArray([...value.incorrect_answers,value.correct_answer])
                return {...value,playerAnswerIs: '',answers:answers}
            } )
            dispatch( getData(data) );
            return res.data.results[0]
        } )
        .then( res =>{
            dispatch( getTopic(res.category) );
            dispatch( getDifficulty(level) )
        } )
    }
}