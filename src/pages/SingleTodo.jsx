import React,{useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { gettodo } from "../store/action";
export const SingleTodo=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo.getTodo.todos);
    const [currentTodo,setCurrentTodo]=useState({});
    useEffect(()=>{
        if(todos.length===0){
            dispatch(gettodo());
        }
    },[todos?.length,dispatch]);
    useEffect(()=>{
        if(id){
            const temp=todos.find((todo)=>todo.id===Number(id));
             setCurrentTodo(temp);
        }
    },[todos,id]);
    return<div>
        <h1>{currentTodo.value}</h1>
        <h3>{currentTodo.isCompleted}</h3>
        <button><Link to={`/todo/${currentTodo.id}/edit`}>Edit</Link></button>
    </div>
    
}