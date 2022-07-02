import {COUNTER_INCREMENT,COUNTER_DECREMENT, COMPLETE_TODO,DELETE_TODO,UPDATE_TODO,ADD_TODO_ERROR,ADD_TODO_LOADING,ADD_TODO_SUCCESS, GETTODO_SUCCESS, GETTODO_LOADING, GETTODO_ERROR} from "./action.types";
import axios from "axios";
//counter app
export const counterInc=()=>({type:COUNTER_INCREMENT});
export const counterDnc=()=>({type:COUNTER_DECREMENT});
// todo app

export const gettodo=()=>(dispatch)=>{
    dispatch({type:GETTODO_LOADING});
    axios.get(" http://localhost:8080/todos")
    .then((r)=>{
        dispatch({type:GETTODO_SUCCESS,payload:r.data});
    })
    .catch(()=>{
        dispatch({type:GETTODO_ERROR});
    })
};
   

export const todoAdd=(payload)=>(dispatch)=>{
    dispatch({type:ADD_TODO_LOADING});
     axios.post("http://localhost:8080/todos",payload)
    .then((r)=>{dispatch({type:ADD_TODO_SUCCESS,payload:r.data})})
    .catch(()=>{dispatch({type:ADD_TODO_ERROR})});

    };
export const todoComplete=(item)=>(dispatch)=>{
    axios.put(`http://localhost:8080/todos/${item.id}`,{
        id:item.id,
        isCompleted:!item.isCompleted,
        value:item.value
    })
    .then((r)=>{dispatch({type:COMPLETE_TODO,payload:r.data})})
};

    export const todoRemove=(id,index)=>(dispatch)=>{
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((r)=>{dispatch({type:DELETE_TODO,payload:index})})
    };
export const todoUpdate=(payload)=>(dispatch)=>{
    axios.put(`http://localhost:8080/todos/${payload.id}`,payload)
    .then((r)=>{dispatch({type:UPDATE_TODO,payload})})
};
