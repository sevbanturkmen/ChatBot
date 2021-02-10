import {combineReducers} from 'redux';
import messageReducer from './message';

// reducers

export default combineReducers({
  message: messageReducer,
});
