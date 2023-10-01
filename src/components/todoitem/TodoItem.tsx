import React, { useState, ChangeEvent } from "react";
import { infTodo } from "../../interfaces";
import styles from "./TodoItem.module.css"

interface ToDoProps {
  todos: infTodo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export const ToDoItem = ({
  todos,
  onToggle,
  onRemove
}: ToDoProps) => {
  const [toggle, setToggle] = useState(todos.completed)

  const chackChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.checked = !toggle
    setToggle(!toggle)
    onToggle(todos.id)
  }

  const remove = (event: React.MouseEvent, id: string) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <div className={styles.todoItem}>
      <input
      className={styles.completeTask}
        type="checkbox"
        checked={toggle}
        onChange={chackChange}
      />
      <span className={toggle ? styles.toggled : ''}>{todos.title}</span>
      <i
        className={styles.remove}
        onClick={event => remove(event, todos.id)}
      >
        Delete
      </i>
    </div>
  )
}