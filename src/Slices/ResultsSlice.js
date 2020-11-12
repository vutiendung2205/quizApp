import { createSlice } from '@reduxjs/toolkit';


const ResultsReducer = createSlice({
    name: 'ResultsReducer',
    initialState: {
        open: false,
        correctAnswer: 0,
        topic: '',
        difficulty: '',
        showAnswer: false,
    },
    reducers: {
        getTopic: (state,action) => {
            return {...state,topic:action.payload}
        },
        getDifficulty: (state,action) => {
            return {...state,difficulty:action.payload}
        },
        getCorrectAnswer: (state,action)=>{
            let number = 0;
            action.payload.map( value=>{
                if(value.correct_answer===value.playerAnswerIs){
                    number++
                }
            } )
            return {...state,correctAnswer:number};
        },
        showResult: (state,action) => {
            return {...state,open: !state.open}
        },
        isShowAnswer: (state,action) =>{
            return{...state,showAnswer:!state.showAnswer}
        }
    }
});

const { reducer,actions } = ResultsReducer;
export const { getTopic, getDifficulty, getCorrectAnswer, showResult, isShowAnswer } = actions;
export default reducer;