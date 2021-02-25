import { Dispatch, SetStateAction, ReactNode } from 'react'
import Button from './Button'

type Dispatcher<T> = Dispatch<SetStateAction<T>> // for useState Types when accessing the useState values

type Props = {
  todos: ITodo2[]
  setTodos: Dispatcher<ITodo2[]>
  className?: string
}

interface ITodo2 {
  text: string
  complete: boolean
}

const TodosList = ({ todos, setTodos, className }: Props) => {
  const completeTodo = (index: number): void => {
    const newTodos: ITodo2[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo2[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <section className={className}>
      {todos.map((todo: ITodo2, index: number) => {
        return (
          <>
            <div key={index}>
              <div
                style={{
                  textDecoration: todo.complete ? 'line-through' : '',
                }}
              >
                {todo.text}
              </div>
              <Button type="button" onClick={() => completeTodo(index)}>
                {''}
                {todo.complete ? 'Incomplete' : 'Complete'}
                {''}
              </Button>
              <Button type="button" onClick={() => removeTodo(index)}>
                Remove
              </Button>
            </div>
          </>
        )
      })}
    </section>
  )
}

export default TodosList
