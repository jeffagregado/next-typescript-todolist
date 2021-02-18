import { Dispatch, SetStateAction } from "react";


type TTodo = {
    todos: ITodo[]
    setTodos: Dispatch<SetStateAction<ITodo[]>>
}

interface ITodo {
    text: string
    complete: boolean
  }

const TodosList = ({ todos, setTodos }: TTodo) => {
  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <section>
      {todos.map((todo: ITodo, index: number) => {
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
              <button type="button" onClick={() => completeTodo(index)}>
                {''}
                {todo.complete ? 'Incomplete' : 'Complete'}
                {''}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                Remove
              </button>
            </div>
          </>
        )
      })}
    </section>
  )
}

export default TodosList
