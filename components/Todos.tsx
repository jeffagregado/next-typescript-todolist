import { useState } from 'react'
import TodosList from '../components/TodosList'
import Button from './Button'
import Input from './Input'

type FormElem = React.FormEvent<HTMLFormElement>

interface ITodo {
  text: string
  complete: boolean
  index?: number
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
      <div className="w-80">
        <div className="flex justify-center bg-indigo-400 text-white py-2 mb-5">
          <h1 className="text-2xl font-semibold">Todo List</h1>
        </div>
        <div className="p-5 rounded-md flex flex-col justify-center bg-white">
          <form action="" onSubmit={handleSubmit} autoComplete="off">
            {/* <Input
              type="input"
              placeholder="Your Todo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mb-4"
            >
              Your Todo
            </Input> */}
            <div className="flex mb-4 justify-around">
              <Input
                type="text"
                placeholder="Your Todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button type="submit">Add Todo</Button>
            </div>
          </form>
          <TodosList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  )
}

export default Todos
