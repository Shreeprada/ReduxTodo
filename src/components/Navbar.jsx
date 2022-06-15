import React from "react";
import { Link } from "react-router-dom";
export const Navbar=()=>{
    return (
        <div>
            <Link to="/">CounterApp</Link>
            <Link to="/todo">TodoApp</Link>
        </div>
    );
};