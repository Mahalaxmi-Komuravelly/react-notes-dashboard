import React, { useState } from 'react'
import { useNotes } from '../context/NotesContext';
const NotesList = () => {
    const {notes} = useNotes();
    const [selectedIndex,setSelectedIndex] = useState(null);

  return (
    <div>
      <ul>
        {notes.map((note,i)=>(
            <li key={i}
            onClick={()=>setSelectedIndex(i)}
            style={{
                backgroundColor:selectedIndex === i ? "skyblue":"white",
                cursor:"pointer",
                margin:"5px",
                padding:"5px",
                border:"1px solid black",
                listStyle:'none',
            }}>
                {note}
            </li>

        ))}
      </ul>
    </div>
  )
}

export default NotesList
