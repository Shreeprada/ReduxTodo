import { ADD_TODO_LOADING,ADD_TODO_ERROR,ADD_TODO_SUCCESS,UPDATE_TODO,COMPLETE_TODO,DELETE_TODO,GETTODO_SUCCESS,GETTODO_ERROR,GETTODO_LOADING } from "./action.types";
const initialstate={
    getTodo:{
        todos:[], isLoading:false, error:false
            },
    addTodo:{
        loading:false
    }
};
export const todoReducer=(state=initialstate,{type,payload})=>{
switch(type){
    case ADD_TODO_LOADING:{
        return {...state,addTodo:{loading:true }};
  
    };
    case ADD_TODO_SUCCESS:{
        return {...state,
            getTodo:{todos:[...state.getTodo.todos,payload]},
            addTodo:{loading:false}
    };
    }
    case ADD_TODO_ERROR:{
        return {...state,addTodo:{loading:false} };
  
    };
   
    case GETTODO_LOADING:{
        return {...state,getTodo:{isLoading:true}};
    }
    case GETTODO_SUCCESS:{
        return {...state,getTodo:{todos:payload,isLoading:false}};
    }
    case GETTODO_ERROR:{
        return {...state,getTodo:{isLoading:false,error:true}};
    }
    case COMPLETE_TODO:{
        let newtodos=state.getTodo.todos.map((todo)=>{
            if(todo.id===payload.id){
                return payload;
            }
            else{
                return todo;
            }
        });
        return {...state,newtodos};
    }
    case DELETE_TODO:{
        return {...state,getTodo:{todos:[...state.getTodo.todos]}};
    }
    case UPDATE_TODO:{
        let newtodos=state.getTodo.todos.map((todo)=>{
            if(todo.id===payload.id){
                return payload;
            }
            else{
                return todo;
            }
        });
        return {...state,newtodos};
    }
    default:{
        return state;
    }
}
};