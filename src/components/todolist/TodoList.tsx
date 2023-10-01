import { ToDoItem } from "../todoitem/TodoItem";
import { infTodo } from "../../interfaces";
import styles from "./TodoList.module.css"

interface ToDosProps {
  todos: infTodo[]
  toggleToDo: (id: string) => void
  removeToDo: (id: string) => void
}

export const TodoList = ({ todos, toggleToDo, removeToDo}: ToDosProps) => {

  return (
    <div>      
      <div className={styles.todoList}>
        {todos.map((todo: infTodo) => {
          return (
            <ToDoItem
              key={todo.id}
              todos={todo}
              onToggle={toggleToDo}
              onRemove={removeToDo}
            />
          )
        })}
      </div>
    </div>
  )
}
