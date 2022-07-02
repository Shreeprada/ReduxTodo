import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {CounterApp} from "./pages/CounterApp";
import {TodoApp} from "./pages/TodoApp";
import {Navbar} from "./components/Navbar";
import {SingleTodo} from "./pages/SingleTodo";
import {Edit} from "./pages/Edit";
function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
     <Route path="/" element={<CounterApp/>}/>
     <Route path="/todo" element={<TodoApp/>}/>
     <Route path="/todo/:id" element={<SingleTodo/>}/>
     <Route path="/todo/:id/edit" element={<Edit/>}/>
     </Routes>   
    </div>
  );
}

export default App;
