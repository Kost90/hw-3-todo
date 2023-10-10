import { memo, useMemo } from "react"
import { createTodos } from "../utils/Utils"
import List from "../List/List"

const TaskList = memo(({todo, onDeleteTodo, theme}) => {
    const actualTodos = useMemo(() => createTodos(todo),[todo])

  return (
        <ul className={theme?'dark':'light'}>
            <List actualTasks={actualTodos} onDelete={onDeleteTodo}/>
        </ul>
  )
})

export default TaskList