import React, {useRef} from 'react';


interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form onSubmit={e => {
            handleAdd(e)
        }}>
            <label>Todo Name: </label>
            <input type="text" ref={inputRef} placeholder="Enter a todo" value={todo} onChange={e => setTodo(e.target.value)} style={{height: "30px"}} />
            <button type="submit">Add todo</button>
        </form>
    );
}

export default InputField;