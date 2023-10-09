import React from 'react'
import {Todo} from "../models/models";
import SingleTodo from "./SingleTodo";

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<props> = ({todos, setTodos, }) => {
    return (
        <div>
            <div className="">
                <span>Active Tasks</span>
                {
                    todos?.map((todo, ) => (
                        <SingleTodo todos={todos} todo={todo} key={todo.id} setTodos={setTodos}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList