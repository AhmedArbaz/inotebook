import { useContext } from "react"; //yaha use karna tha to useContext ki imp kia
import noteContext from "../Context/notes/noteContext";
import { useState } from "react";
const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;


    const [note, setnote] = useState({title: "",description:"",tag:"default"});


    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e)=>{
        setnote({...note,[e.target.name]:e.target.value}) //...note ais ka matlab hay jo properties hain vo rahin but more ais may add ho jain ya vohi purana kam kia kay jasay name change ho to value bhi change ho jay 
    }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="title">
          Title
        </span>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          placeholder="Title"
          aria-label="Title"
          aria-describedby="addon-wrapping"
          onChange={onChange}
        />
      </div>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="description">
          Description
        </span>
        <input
          type="text"
          name="description"
          id="description"
          className="form-control"
          placeholder="Description"
          aria-label="text"
          aria-describedby="addon-wrapping"
          onChange={onChange}

        />
      </div>
      <div className="input-group flex-nowrap mb-4">
        <span className="input-group-text" id="tag">
          Tag
        </span>
        <input
          type="text"
          name="tag"
          id="tag"
          className="form-control"
          placeholder="Tag"
          aria-label="text"
          aria-describedby="addon-wrapping"
          onChange={onChange}

        />
      </div>
      
      <button type="button" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
      
      <h2 className="my-3">Your Notes</h2>
   
    </div>

  )
}

export default AddNote
