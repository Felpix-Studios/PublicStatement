import { combineReducers } from 'redux';
import statementReducer from './statementReducer';
export default combineReducers({
  statement: statementReducer
});