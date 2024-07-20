import React, { useEffect, useState }  from 'react'
import { useContext, useRef } from "react"; //yaha use karna tha to useContext ki imp kia
import noteContext from "../Context/notes/noteContext";// ais may context create kia tha ais liay imp kia
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = () => {
    const context = useContext(noteContext); //ak var may use kia ham nay jo create kia tha context jis file may 
const {notes,GetNotes,EditNote} = context; //Destructure kia lay kar ay apny context say jo values may dala tha nichay use kia hay as props pass kia hay NoteItem ko .map may 
useEffect(() => {
  GetNotes()
  // eslint-disable-next-line
}, []);
const ref = useRef(null) //ya use ref use kar rahay hain toggle kay liay use hota hay kisi ki bhi curent condion change kay liay

const refClose = useRef(null) //NOTE: ya modal ko band karay ga ais ki jaga ham data-bs-dismiss="modal" bhi kar sakty hain update valay button may (abhi ais pay click karin gay to ham chaty hian kay update pay click ho to band ho to handleclike may dalin gay)

const [note, setnote] = useState({id:"",etitle: "",edescription:"",etag:""});
// ya ham nay id aur value nichay change ki thi aus ko yaha bhi change kar dia 

const updateNote = (currentNote)=>{
  ref.current.click() //click() function hay kay ham apny modal ko use karin toggle ki thara
  setnote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  //ya ham nay ais liay kia hay currentNote may title =title hi tha aus ki etitle kay equal karny kay liay kia ya 
  
}


const handleClick = (e)=>{
  console.log("updating the note---",);
  EditNote(note.id, note.etitle, note.edescription, note.etag) //EditNote ko NoteState say lay aur aus ko args diay aus kay 
  refClose.current.click();
  
}

const onChange = (e)=>{
  setnote({...note,[e.target.name]:e.target.value}) //...note ais ka matlab hay jo properties hain vo rahin but more ais may add ho jain ya vohi purana kam kia kay jasay name change ho to value bhi change ho jay 
}
  return (
    <>
    <AddNote/>

    {/* Modal code  */}
    
    
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal etitle</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        {/* ya form copy kia hay AddNote valay say */}
        <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id='etitle'>Title</span>
        <input type="text" name="etitle" id="etitle" value={note.etitle} className="form-control" placeholder="Title" aria-label="Title" aria-describedby="addon-wrapping" onChange={onChange}/>
      </div>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="edescription">
          Description</span>
        <input type="text" name="edescription" id="edescription" value={note.edescription}
        // NOTE: ain sab may value day di note.description,note.title asay ya karny say jasay hi ham click karin gay edit pay to ais ki values jo hon gi vo aus may a jain gi lakin abhi likh nahi sakin gay Q kay onChange abhi sahi say nahi likha hay 
        className="form-control" placeholder="Description" aria-label="text" aria-describedby="addon-wrapping" onChange={onChange}/>
      </div>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="etag">Tag</span>
        <input  type="text"  name="etag"  id="etag" value={note.etag} className="form-control"  placeholder="Tag"  aria-label="text"  aria-describedby="addon-wrapping"  onChange={onChange}/>
      </div>
     
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Update Changes</button>
      </div>
    </div>
  </div>
</div> 

   <div className='row'> {/*row kar dia aur aur NotesItems may col-md-3 kar dia to cards row may ho gay saray */}

        {/* ya use kia .map may  */}
        {
          notes.map((notes)=>{
            return <NoteItem key={notes._id} notes={notes} updateNote={updateNote}/>; //ya updateNote function NoteItem may use hoa hay Q kay edit icon ausi may hay
            // ya props pass kia NoteItem ko 
          })
        }
    </div>
        </>
  )
}

export default Notes
