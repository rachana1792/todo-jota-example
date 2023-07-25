
import './App.css'

import TodoAdd from "./components/TodoAdd"; 
import { useAtom } from "jotai";
import TodoList from "./components/TodoList"; 
import { todoAtom } from "./TodoStore"; 

const App = () => {
  const [todos] = useAtom(todoAtom); 

  return (
    <div className="App">
      {todos.map((duty) => (
        <TodoList key={duty.id} task={duty} />
      ))}

      <TodoAdd />
    </div>
  );
};

export default App;