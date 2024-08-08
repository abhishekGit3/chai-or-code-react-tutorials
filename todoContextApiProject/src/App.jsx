import "./App.css";
import { useEffect, useState } from "react";
import { todoProvider } from "./context/index";
function App() {

  const [todos , setTodos] = useState([]);
  
  const addTodo = (todoTitle) =>{
    setTodos((prev) => [{id: Date.now(),...todoTitle},...prev]);
  }
 
  const updateTodo = (id , todoTitle) =>{
    setTodos((prev) => prev.map((prevTodo) =>{
      prevTodo.id === id ? todoTitle : prevTodo
    }))
  }
  
  const deleteTodo = (id)=>{
    setTodos((prev) =>
       prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos((prev)=> prev.map((prevTodo) =>{
      prevTodo.id  === id ? {...todos ,  completed: !prevTodo.completed} : prevTodo
     }))
  }


  useEffect(() =>{
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if(localTodos){
      setTodos(localTodos);
    }
  },[]);

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);


  return (
    <todoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </todoProvider>
  );
}
export default App;
