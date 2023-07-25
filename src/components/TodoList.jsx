import { useAtom } from "jotai";
import { todoAtom } from "../TodoStore";



 const TodoList = ({ task }) => {

  const [todoList, setTodoList] = useAtom(todoAtom);

  const index = todoList.findIndex((listTasks) => listTasks === task);

  const updateItemAtIndex = (arr, index, newValue) => {
    console.log("index", index)
    console.log("arr", [...arr.slice(0, index), newValue, ...arr.slice(index + 1)])
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const updateTask = (e) => {

    const newTodoList = updateItemAtIndex(todoList, index, {
      ...task,
      text: e.target.value,
    });

    setTodoList(newTodoList);
  };

  const toggleDone = () => {
    
    const newTodoList = updateItemAtIndex(todoList, index, {
      ...task,
      done: !task.done,
    });
  

    setTodoList(newTodoList);
  };
  
  const deleteItem = () => {
    const newTodoList = removeItemAtIndex(todoList, index);

    setTodoList(newTodoList);
  };

  return (
    //jsx
    <div>
      <input
        type="text"
        value={task.text}
        onChange={updateTask}
      />
      <input
        type="checkbox"
        checked={task.done}
        onChange={toggleDone}
      />
      <button  onClick={deleteItem}>
        delete
      </button>
    </div>
  );
};

 export default TodoList;