import { combineReducers } from 'redux';
import dataReducer from '../Slices/DataSlice';
import dialogReducer from '../Slices/DialogSlice';
import resultsReducer from '../Slices/ResultsSlice';
import NotiDialogReducer from '../Slices/NotiDialogSlice';
import TimerReducer from '../Slices/TimerSlice';
const rootReducer = combineReducers({
    data: dataReducer,
    dialog: dialogReducer,
    results: resultsReducer,
    notiDialog: NotiDialogReducer,
    timer:TimerReducer,
});
export default rootReducer;