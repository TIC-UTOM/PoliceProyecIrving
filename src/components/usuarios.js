import react from 'react';
import React, {useState, useEffect} from 'react';


function ApiRest(){
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
    console.log(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="App">
      <ul>
          { !todos ? 'Cargando...':
            todos.map( (todo, index)=>{
              return <li key={index}>{todo.title} {todo.completed ? '✓':'X'}</li>
          })
        }
      </ul>
    </div>
  )
}

export default ApiRest;