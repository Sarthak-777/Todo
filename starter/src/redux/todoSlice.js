import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state,action)=>{
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTodo);
        },
        fetchTodo: ()=>{},
        setFetchTodo: (state, action)=>{
            console.log(action.payload)
            action.payload.map((todo)=>{
                const newTodo = {
                    id: todo.id,
                    title: todo.title,
                    completed: todo.completed
                }
                state.push(newTodo)
                return state
            })
        },
        toggleComplete: (state,action)=>{
            const index = state.findIndex((todo)=>todo.id === action.payload.id)
            state[index].completed = action.payload.completed
        },
        deleteTodo: (state,action)=>{
            return state.filter((todo)=> todo.id !== action.payload.id)
        }
    }
})

export const { addTodo, toggleComplete, deleteTodo, fetchTodo, setFetchTodo } = todoSlice.actions

export default todoSlice.reducer