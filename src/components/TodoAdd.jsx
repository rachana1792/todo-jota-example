import { useState } from "react";
import { todoAtom } from "../TodoStore"; 
import { useAtom } from "jotai";
import { v4 } from "uuid"; 
const TodoAdd = () => {

const [value, setValue] = useState("");
const [, setTodos] = useAtom(todoAtom);

const onChange = (event) => {
  setValue(event.target.value);
};
const handleAdd = () => {
  if (value) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: v4(),
        text: value,
        done: false,
      },
    ]);
    setValue(""); 
  }
};
return (
  <div>
    <input placeholder="New todo" value={value} onChange={onChange} />
    <button onClick={handleAdd}>Add Todo</button>
  </div>
);
};
export default TodoAdd;