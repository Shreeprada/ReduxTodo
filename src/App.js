import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {CounterApp} from "./pages/CounterApp";
import {TodoApp} from "./pages/TodoApp";
import {Navbar} from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
     <Route path="/" element={<CounterApp/>}/>
     <Route path="/todo" element={<TodoApp/>}/>
     </Routes>   
    </div>
  );
}

export default App;
