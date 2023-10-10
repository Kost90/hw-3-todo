import { useCallback, useState, useLayoutEffect } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskInput from "./components/TaskInput/TaskInput";
import useTheme from "./components/hooks/useTheme/useTheme";
import './App.css'

function App() {
  const [numTodo, setNumTodo] = useState(0);
  const [todo, setTodo] = useState([]);
  const [isDark, handleChange] = useTheme();

  useLayoutEffect(() =>{
    setNumTodo(todo.length);
    document.title = `${numTodo} tasks`;
  }, [numTodo, todo])

  const handelAddTodo = useCallback((text) =>{
    setTodo(prev => [...prev, {
      id: prev.length + 1,
      text: text
    }])
  },[])

  const handelDeleteTodo = useCallback((id) =>{
    setTodo(
      todo.filter(item => item.id !== id)
    )
  },[todo])


  return (
    <div className={isDark?'dark':'light'}>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleChange}
        />
        Dark mode
      </label>
      <TaskInput theme={isDark} onAddTodo={handelAddTodo}/>
      <TaskList todo={todo} onDeleteTodo={handelDeleteTodo} theme={isDark}/>
      <p>You have {numTodo} tasks</p>
    </div>
  );
}

export default App;
