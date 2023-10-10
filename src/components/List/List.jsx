import { memo } from "react"

const List = memo(({actualTasks, onDelete}) => {

  return (
    <>
     {actualTasks.map(element => (
        <div key={element.id}>
        <li>{element.text}</li>
        <button onClick={() => onDelete(element.id)}>Delete</button>
        </div>
    ))}
    </>
  )
})

export default List