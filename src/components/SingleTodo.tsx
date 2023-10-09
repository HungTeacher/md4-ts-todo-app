import React, {useState, useEffect, useRef} from 'react'
import {Todo} from "../models/models";

interface props {
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const SingleTodo: React.FC<props> = ({todo, todos, setTodos,}) => {
    const [edit, setEdit] = useState<boolean>(false)
    console.log("edit: ", edit)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])
    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, todo: editTodo } : todo)
        );
        setEdit(false)
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const handleDone = (id:number) => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        )
    }
    return (
        <form onSubmit={e => handleEdit(e, todo.id)}>
            {edit ? (
                <input ref={inputRef} value={editTodo} onChange={e => setEditTodo(e.target.value)}/>
            ) : todo.isDone ? (
                <s>{todo.todo}</s>
            ) : (
                <span>{todo.todo}</span>
            )}
            <div>
                <span onClick={() => {
                    if(!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}>Edit</span>
                <span onClick={() => handleDelete(todo.id)}>Delete</span>
                <span onClick={() => handleDone(todo.id)}>Done</span>
            </div>
        </form>
    )
}

export default SingleTodo