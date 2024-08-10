import { useContext , createContext } from 'react'

export const todoContext = createContext({
    todos:[
        {
            id: 1 ,
            todoTitle: "todo messege",
            completed: false
        }
    ],

    addTodo: (todoTitle) => {},
    updateTodo: (id, todoTitle) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{}
});

export const useTodo = () =>{
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;



