import React,{useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { gettodo,todoUpdate } from "../store/action";
export const Edit=()=>{
    const {id}=useParams();
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.todo.getTodo.todos);
    const [currentTodo,setCurrentTodo]=useState({});
    const [newvalue,setNewValue]=useState("");
    
    const handleInput=(e)=>{
        setNewValue(e.target.value);
    };

    const handleSubmit=()=>{
        let edited={};
        edited.id=currentTodo.id;
        edited.value=newvalue;
        edited.isCompleted=currentTodo.isCompleted;
        dispatch(todoUpdate(edited));
    }

    useEffect(()=>{
        if(todos.length===0){
            dispatch(gettodo());
        }
    },[todos?.length,dispatch]);
    useEffect(()=>{
        if(id){
            const temp=todos.find((todo)=>todo.id===Number(id));
             setCurrentTodo(temp);
             console.log("temp",temp);
        }
    },[todos,id]);

    return<>
    <h3>Edit Here</h3>
    <h2>Current Todo Name:{currentTodo.value}</h2>
    <input type="text" placeholder="Enter new name" value={newvalue} onChange={handleInput}/>
    <button onClick={handleSubmit}>Subit</button>
    <Link to="/todo">Go to Home</Link>
    </>
};