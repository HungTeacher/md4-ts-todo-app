import React, {useState} from 'react';

import './App.css'
import InputField from "./components/InputField";
import {Todo} from './models/models';
import TodoList from "./components/TodoList";
const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Array<Todo>>([])

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        if(todo) {
            setTodos([...todos, {id: Date.now(), todo, isDone: false }])
            setTodo("")
        }
    }
  return (
    <>
        <h1>Todo List App</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
            todos={todos}
            setTodos={setTodos}
        />
    </>
  )
}

export default App
