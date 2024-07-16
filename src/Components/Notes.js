import React from 'react'
import { useContext } from "react"; //yaha use karna tha to useContext ki imp kia
import noteContext from "../Context/notes/noteContext";// ais may context create kia tha ais liay imp kia

const Notes = () => {
    const context = useContext(noteContext); //ak var may use kia ham nay jo create kia tha context jis file may 
const {notes,setNotes} = context; //Destructure kia lay kar ay apny context say jo values may dala tha nichay use kia hay .map may Your notes kay nichay forms kay nichay 
  return (
    <div>
        {/* ya use kia .map may  */}
        {
        notes.map((notes)=>{
          return notes.title;
        })
      }
    </div>
  )
}

export default Notes
