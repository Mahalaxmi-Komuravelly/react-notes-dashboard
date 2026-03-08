import React from 'react'
import { useNotes } from '../context/NotesContext';
const NotesList = () => {
    const {notes} = useNotes();

  return (
    <div>
      <ul>
        {notes.map((note,i)=>(
            <li key={i}>
                {note}
            </li>

        ))}
      </ul>
    </div>
  )
}

export default NotesList
