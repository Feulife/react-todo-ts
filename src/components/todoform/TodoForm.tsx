import React, { ChangeEvent, FormEvent, HTMLAttributes, useState } from "react";
import { infTodo } from "../../interfaces";
import styles from "./TodoForm.module.css"

interface ToDoFormProps extends HTMLAttributes<HTMLDivElement> {
  addTask: (todo: infTodo) => void
};

  export const TodoForm = ({addTask}: ToDoFormProps) => {
    const [textInput, setTextInput] = useState('')
    const dateNow = Date.now().toLocaleString()
    const createNewTask = (event:FormEvent) => {
      event.preventDefault()
      addTask({id: dateNow, title: textInput, completed: false});
      setTextInput('')
    };

    const changeTextInput = (event:ChangeEvent<HTMLInputElement>) => {
      setTextInput(event.target.value)
    };
  
  return (
    <div >
      <form className={styles.form} onSubmit={createNewTask}>
        <input
          className={styles.textInput}
          type="text"
          name="title"
          placeholder="Enter todo title"
          autoComplete='off'
          onChange={changeTextInput}
          value={textInput}          
        />
      </form>
    </div>
  )
}