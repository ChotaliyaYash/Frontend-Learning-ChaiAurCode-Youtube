import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodos = () => {

    const [task, setTask] = useState("");

    const dispatch = useDispatch();

    const handelOnClick = (e) => {
        e.preventDefault();

        if (!task) return;

        dispatch(addTodo(task));
        setTask("");
    }

    return (
        <form className="flex" onSubmit={handelOnClick}>
            <input
                type="text"
                value={task}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
                Add
            </button>
        </form>
    )
}

export default AddTodos