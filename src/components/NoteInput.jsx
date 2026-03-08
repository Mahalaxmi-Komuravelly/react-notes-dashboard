import React, { useEffect, useRef, useState } from 'react'
import { useNotes } from '../context/NotesContext';

const NoteInput = () => {
    const [note,setNote] = useState("");
    const {addNote} = useNotes();
    const inputRef = useRef(null);

    const handleAdd = () => {
        addNote(note);
        setNote("");
    }
    
    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div>
      <input type='text' placeholder='Enter Notes' ref={inputRef} onChange={(e)=>setNote(e.target.value)}/>
      <button onClick={handleAdd}>Add Notes</button>
    </div>
  )
}

export default NoteInput
