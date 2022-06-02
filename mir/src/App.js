import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  function addTodo() {
    setTodo([...todo, text])
    setText('')
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          placeholder='добавить'
          onChange={e => setText(e.target.value)} />
        <button onClick={addTodo}>ok</button>
        <ul>
          {todo.map(item => (
            <li>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
 export default App