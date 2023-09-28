import React from "react";
import { infTodo } from "../interfaces";

interface Props {
  todos: infTodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<Props> = ({
  todos,
  onToggle,
  onRemove
}) => {
  if (todos.length === 0) {
    return <p>Nothing added</p>
  }

  const remove = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li key={todo.id} >
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => remove(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}