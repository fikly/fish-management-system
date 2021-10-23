import {combineReducers} from 'redux';
import contentReducer from './reducers/contentReducer';
import generalReducer from './reducers/generalReducer';
export default combineReducers({
    content: contentReducer,
    general: generalReducer,
});
