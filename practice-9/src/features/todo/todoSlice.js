import { createSlice, nanoid } from '@reduxjs/toolkit'
import { useEffect } from 'react'

const items = localStorage.getItem("todos") !== null ? JSON.parse(localStorage.getItem("todos")) : []

const initialState = {
    todos: items,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const data = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }

            state.todos.push(data);
            localStorage.setItem("todos", JSON.stringify(state.todos.map(todo => todo)))
        },

        updateTodo: (state, action) => {

            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    // return {
                    //     ...todo,
                    //     text: action.payload.text,
                    // }
                    return action.payload
                } else {
                    return todo
                }
            })
            localStorage.setItem("todos", JSON.stringify(state.todos.map(todo => todo)))
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos.map(todo => todo)))
        },

        toggleCompleted: (state, action) => {

            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                } else {
                    return todo;
                }
            })
            localStorage.setItem("todos", JSON.stringify(state.todos.map(todo => todo)))
        }
    },
})

export const { addTodo, removeTodo, toggleCompleted, updateTodo } = todoSlice.actions

export default todoSlice.reducer