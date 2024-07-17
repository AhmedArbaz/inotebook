import React from 'react'
import { useContext } from "react"; //yaha use karna tha to useContext ki imp kia
import noteContext from "../Context/notes/noteContext";// ais may context create kia tha ais liay imp kia
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext); //ak var may use kia ham nay jo create kia tha context jis file may 
const {notes,addNote} = context; //Destructure kia lay kar ay apny context say jo values may dala tha nichay use kia hay as props pass kia hay NoteItem ko .map may 
  return (
    <>
    <AddNote/>
    <div className='row'> {/*row kar dia aur aur NotesItems may col-md-3 kar dia to cards row may ho gay saray */}

        {/* ya use kia .map may  */}
        {
          notes.map((notes)=>{
            return <NoteItem key={notes._id} notes={notes}/>; 
            // ya props pass kia NoteItem ko 
          })
        }
    </div>
        </>
  )
}

export default Notes
