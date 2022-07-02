import axios from "axios";
import React,{useState,useRef, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { todoAdd,gettodo,todoRemove,todoComplete } from "../store/action";
import { UPDATE_TODO } from "../store/action.types";
import { Link } from "react-router-dom";
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
    const deletetodo=(id,index)=>{
dispatch(todoRemove(id,index));


    };
    const toggle=(item)=>{
         dispatch(todoComplete(item));
        
        console.log(todos);
    }
    useEffect(()=>{
        dispatch(gettodo());
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
{todos.map((item,index)=>(
   <div key={item.id} style={{display:"flex",gap:"30px",marginLeft:"35%",border:"1px solid grey",marginBottom:"5px",padding:"5px 10px",width:"27%"}}>
    <div style={{width:"25%"}}><input type="checkbox" value={item.isCompleted} checked={item.isCompleted} onChange={()=>toggle(item)} /></div>
    <div style={{width:"50%",textAlign:"left"}}><Link to={`/todo/${item.id}`}>{item.value}</Link></div>
    <div style={{width:"25%"}}><button onClick={()=>deletetodo(item.id,index)}>Remove</button></div>
</div>  
))}
        </div>
    );
};