import { createSlice } from '@reduxjs/toolkit';

const TimerReducer = createSlice({
    name: 'TimerReducer',
    initialState: {
        open    : false,
        time : 0,
    },
    reducers: {
        startT : (state,action) => {
            return {...state,open:true}
        },
        stopT: (state,action) => {
            return {...state,open:false}
        },
        getTime: (state,action) => {
            console.log('getTime')
            return {...state,time:action.payload}
        },
    }
});

const { reducer, actions } = TimerReducer;
export const { startT, stopT,getTime } = actions;
export default reducer;