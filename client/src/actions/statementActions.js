import { GET_STATEMENTS, ADD_STATEMENT, STATEMENTS_LOADING } from './types';
import axios from 'axios';

export const getStatements=()=> dispatch =>{
  dispatch(setStatementsLoading());
  axios
    .get('/statements')
    .then(res=>
      dispatch({
        type: GET_STATEMENTS,
        payload: res.data
      })
    )

};



export const addStatement=(statement)=>dispatch=>{
  axios
    .post('/statement', statement)
    .then(res=>dispatch({
      type:ADD_STATEMENT,
      payload: res.data
    }))
};

export const setStatementsLoading=()=>{
  return{
    type: STATEMENTS_LOADING
  };
};