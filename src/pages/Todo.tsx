import React, { Fragment, useState } from "react";
import { infTodo } from "../interfaces";

export const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Array<infTodo>>([]);

  const addTodo = (title: string) => {
    const newTodo: infTodo = {
      title,
      id: Date.now(),
      completed: false
    }

    setTodos(prev => [newTodo, ...prev])
  }

  const onToggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo
      }))
  }
  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <Fragment>

    </Fragment>
  )
}

// export default Todo;