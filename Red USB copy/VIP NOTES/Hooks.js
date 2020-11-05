import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState(props.text) 
  const increment = () => {
     setCount(count + 1)
  }
  return (
    <div>
      <p>The Current {text || "Count"} is {count}</p>
      <button onClick={increment} style={{margin:"10px"}}>+1</button>
      <button onClick={() => setCount(count - 1)} disabled = {count === 0} style={{margin:"10px"}}>-1</button>
      <input 
       value={text}
       onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

App.defaultProps = {
  count: 0,
  text: ""
}

export default App


// state = {
// count: 0
// }

// *****************************************************************************

import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState("")
  const addNote = (e) => {
     e.preventDefault()
     setNotes([
       ...notes,
       { title }
     ])
     setTitle('')
  }
  const removeNote = (title) => {
    setNotes(notes.filter(note => title !== note.title))
  }
  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={addNote}>
        <input 
          value = {title}
          onChange = {(e) => setTitle(e.target.value)}
        />
        <button>Add Note</button>
      </form>
      {notes.map(note => (
        <ul key={note.title}>
          <li>{note.title}     <span onClick={() => removeNote(note.title)}>x</span></li>
        </ul>
      ))}
    </div>
  )
}

export default App


// state = {
// count: 0
// }
// *****************************************************************************
