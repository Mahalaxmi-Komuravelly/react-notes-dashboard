import React from 'react'
import NoteInput from './components/NoteInput'
import NotesList from './components/NotesList'

const App = () => {
  return (
    <div>
      <h1>Notes Dashboard</h1>
      <NoteInput/>
      <NotesList/>
    </div>
  )
}

export default App
