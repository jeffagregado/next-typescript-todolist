import { useState } from 'react'
import TodosList from '../components/TodosList'
import styleTodolist from '../styles/Todolist.module.scss'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

const Todos = () => {
  const [value, setValue] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  return (
    <>
      <div className={styleTodolist.todolist}>
        <h1 className={styleTodolist['todolist__title']}>Todo List</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            className={`${styleTodolist['todolist__input']} ${styleTodolist['todolist__input--round']}`}
            type="text"
            value={value}
            placeholder="Input text"
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">Add Todo</button>
        </form>
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default Todos
