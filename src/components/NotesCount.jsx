import React, { useMemo } from 'react'
import { useNotes } from '../context/NotesContext'

const NotesCount = () => {
    const {notes} = useNotes();
    const totalNotes = useMemo(()=>{
        return notes.length;
    },[notes])
  return (
    <div>
      <h3>Total Notes: {totalNotes}</h3>
    </div>
  )
}

export default NotesCount
