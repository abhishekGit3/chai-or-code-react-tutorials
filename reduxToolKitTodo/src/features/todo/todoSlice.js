import {createSlice , nanoId} from '@reduxjs/toolkit';

const initialState = {
    todos:[
        {
            id : 1,
            text: 'hello world'
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state , action) =>{
            const todo = {
                id : nanoId(),
                text: action.payload
            }
            state.todos.push(todo);
        },


        removeTodo: (state , action) =>{
            
        }
    }
})