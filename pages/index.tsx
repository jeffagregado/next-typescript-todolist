import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { useState } from 'react'
import TodosList from '../components/TodosList'
import styles from '../styles/Home.module.css'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
}

export default function Home() {
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
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>

      <TodosList todos={todos} setTodos={setTodos} />
    </>
  )
}
