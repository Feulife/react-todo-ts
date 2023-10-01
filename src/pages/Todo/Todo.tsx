import React, { useState, useEffect } from "react";
import { TodoForm } from "../../components/todoform/TodoForm";
import { TodoList } from "../../components/todolist/TodoList";
import { infTodo } from "../../interfaces";
import styles from "./Todo.module.css"

export const Todo = () => {
  const [todosList, setTodosList] = useState<Array<infTodo>>([])

  const addTodo = (todo: infTodo) => {
    setTodosList([...todosList, todo])
  }

  const onToggleTodo = (id: string) => {
    setTodosList(todosList.map(todo => {
      if (todo.id === id) {
        return { id: todo.id, completed: !todo.completed, title: todo.title }
      } else {
        return todo
      }
    }))
  }
  const removeTodo = (id: string) => {
    setTodosList(todosList.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <div className={styles.createNew}>
        <TodoForm addTask={addTodo} />
      </div>
      <div className={styles.list}>
        {todosList.length === 0 ? (
          <p className={styles.notadd}>Nothing added</p>
        ) : (
          <TodoList
            todos={todosList}
            toggleToDo={onToggleTodo}
            removeToDo={removeTodo}
          />
        )}
      </div>
    </div>
  )
}
