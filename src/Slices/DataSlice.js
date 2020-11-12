import { createSlice } from '@reduxjs/toolkit';



const dataReducer = createSlice({
    name: 'dataReducer',
    initialState : [],
    reducers: {
        getData : (state,action) =>{
            return action.payload
        },
        editAnswer: (state,action) => {
            return state.map( (value) => {
                if(value.question == action.payload.question){
                    return {...value,playerAnswerIs:action.payload.answer}
                }else{
                    return value
                }
            } )
        }
    }
});

const { reducer,actions } = dataReducer;
export const { getData, editAnswer } = actions;
export default reducer;