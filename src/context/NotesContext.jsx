import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        if (savedNotes.length > 0) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => {
        setNotes((prev)=>[...prev, note]);
    };
    return (
        <NotesContext.Provider value={{ notes, addNote }}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotes = () => useContext(NotesContext);