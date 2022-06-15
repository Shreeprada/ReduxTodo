import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterDnc,counterInc } from "../store/action";
export const CounterApp=()=>{
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.count);

    return (
        <div>
            <h1>CounterApp:{count}</h1>
            <button onClick={()=>dispatch(counterDnc())}>-</button>
            <button onClick={()=>dispatch(counterInc())}>+</button>
        </div>
    );
};