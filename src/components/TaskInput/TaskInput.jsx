import { useState, useRef, memo, useCallback } from "react"

const TaskInput = memo(({onAddTodo, theme}) => {
const [validate, setValidate] = useState(false)
const inputRef = useRef(null);

const handelAddTodo = useCallback(() =>{
    const text = inputRef.current.value;
    if(text.length < 3){
        setValidate(true)
    } else{
        onAddTodo(text)
        setValidate(false)
        inputRef.current.value = '';
    }
},[])

  return (
    <div>
        <input type="text" ref={inputRef} placeholder="Add new task" minLength={3}/>
        <button onClick={handelAddTodo} className={theme?'dark-btn':'light-btn'}>Add Task</button>
        {validate && <p className='validet'>Input must be at least 3 characters long</p>}
    </div>
  )
})

export default TaskInput