import { createSlice } from '@reduxjs/toolkit';

const DialogReducer = createSlice({
    name: 'DialogReducer',
    initialState: {
        open    : false,
        message : ''
    },
    reducers: {
        openDialog: (state,action)=> {
            return {...state,open: !state.open}
        },
        editMessage: (state,action) => {
            return {...state,message: action.payload}
        }
    }
});

const { reducer, actions } = DialogReducer;
export const { openDialog, editMessage } = actions;
export default reducer;