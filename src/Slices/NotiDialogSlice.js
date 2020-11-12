import { createSlice } from '@reduxjs/toolkit';

const NotiDialogReducer = createSlice({
    name: 'NotiDialogReducer',
    initialState: {showNotiDialog: false},
    reducers: {
        isShowNotiDialog: (state,action) => {
            return {showNotiDialog: !state.showNotiDialog}          
        }
    }
});

const { reducer, actions } = NotiDialogReducer;
export const { isShowNotiDialog } = actions;
export default reducer;