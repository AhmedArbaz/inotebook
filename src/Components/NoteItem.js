import noteContext from "../Context/notes/noteContext";
import { useContext } from "react"; //yaha use karna tha to useContext ki imp kia



const NoteItem = (props) => {
  //ya delenote ko context say lay kar ay 
  const context = useContext(noteContext);
    const {deleteNote} = context;

  const {notes, updateNote } = props; //ya destructing ki 
  return (
    <div className='col-md-3'> 
    {/* ya col-md-3 karny say ya column may ho gaya aur Notes.js may container hata hay row kar dia  */}
      <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{notes.title}</h5>
    <p className="card-text">{notes.description}</p>
    <i className="fa-solid fa-trash-can mx-2"onClick={()=>{deleteNote(notes._id)}}></i>
    <i className="far fa-edit mx-2" onClick={()=>{updateNote(notes)}}></i>
  </div>
</div>
    </div>
  )
}

export default NoteItem
