
import './App.css'

import TodoAdd from "./components/TodoAdd"; 
import { useAtom } from "jotai";
import TodoList from "./components/TodoList"; 
import { todoAtom, textUpperCaseAtom } from "./TodoStore";

const App = () => {
  const [todos] = useAtom(todoAtom); 
  const [title] = useAtom(textUpperCaseAtom); 

  return (
    <div className="App">
      <h1>{title}</h1>
      {todos.map((duty) => (
        <TodoList key={duty.id} task={duty} />
      ))}

      <TodoAdd />
    </div>
  );
};

export default App;