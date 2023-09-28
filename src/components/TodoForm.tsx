import React, { useRef } from "react";

interface ToDoFormProps {
  addTusk(title: string): void
}

export const TodoForm: React.FC<ToDoFormProps> = props => {
  const ref = useRef<HTMLInputElement>(null)
const keyPress = (event: React.KeyboardEvent) => {
  if (event.key === 'Enter') {
    props.addTusk(ref.current!.value)
    ref.current!.value = ''
  }
}

return (
  <div>
    <input
    ref={ref}
    type="text"
    id="title"
    placeholder="Enter todo title"
    onKeyDown={keyPress}
    />
    <label htmlFor="title">
      Enter todo title
    </label>
  </div>
)
}