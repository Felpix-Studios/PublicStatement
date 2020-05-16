
import { GET_STATEMENTS, ADD_STATEMENT, STATEMENTS_LOADING } from '../actions/types';

const initialState={
  statements:[],
  loading:false
}

//list of reducers from actions
export default function(state=initialState, action){
  switch(action.type){
    case GET_STATEMENTS:
      return{
        ...state,
        statements:action.payload,
        loading:false

      }
    case ADD_STATEMENT:
      return{
        ...state,
        statements:[action.payload, ...state.statements]
      }
      case STATEMENTS_LOADING:
        return{
          ...state,
          loading:true
        }
    default:
      return state;
  }
}