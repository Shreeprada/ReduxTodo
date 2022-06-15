import axios from "axios";
import React,{useState,useRef, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { todoAdd,gettodo,todoRemove,todoComplete } from "../store/action";
import { UPDATE_TODO } from "../store/action.types";
export const TodoApp=()=>{
    const ref=useRef();
    const dispatch=useDispatch();
    const {todos,isLoading,error}=useSelector((state)=>state.todo.getTodo);
    const {loading:addButtonLoading}=useSelector((state)=>state.todo.addTodo);
    const addNew=()=>{
        let value=ref.current.value;
        
            dispatch(todoAdd({
                value:value,
                isCompleted:false,
            }));
            ref.current.value=null;
       
    };
    const deletetodo=(id)=>{
dispatch(todoRemove(id));

    };
    const toggle=(item)=>{
         dispatch(todoComplete(item));
        
        console.log(todos);
    }
    useEffect(()=>{
        dispatch(gettodo())
    },[]);
    if(isLoading){
        return <div>Loading...</div>
    }
    else if(error){
        return <div>Something went wrong...</div>
    }
    return (
        <div>
<h1>TodoApp</h1>
<input type="text" palceholder="add something" ref={ref}/>
<button onClick={addNew} disabled={addButtonLoading}>Add</button>
<br/>
<br/>
{todos.map((item)=>(
    <div key={item.id} style={{display:"flex",gap:"30px",marginLeft:"42%"}}>
        <input type="checkbox" value={item.isCompleted} checked={item.isCompleted} onChange={()=>toggle(item)} />
        <div>{item.value}</div>
        <button onClick={()=>deletetodo(item.id)}>Remove</button>
    </div>
   
))}
        </div>
    );
};