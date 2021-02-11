import {combineReducers} from 'redux';
import messageReducer from './message';
import infoReducer from './info';

// reducers

export default combineReducers({
  message: messageReducer,
  value: infoReducer,
});
