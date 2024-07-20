import noteContext from "./noteContext";
import { useState } from "react";
//ya import kia bany hoay context ko aur use kia 


const NoteState = (props)=>{
  const host = 'http://localhost:5000' //ya ak basic var banaya
const initialNotes = [
    
]
//NOTE: CORES package install karna ho ga privacy ko hatany kay liay  BACKEND may install ho ga
const [notes, setNotes] = useState(initialNotes);

// Get All note OR Fetch all Notes
const GetNotes = async()=>{
  // APi Call for Get all notes
  const response = await fetch(`${host}/api/notes/fetchallnotes`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      // ya auth-token lay kar ay hain headers say bad may change karin gay asay hard code nahi karin gay 
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MjQ3ZjBmZTUzY2Y5NmNhMDJlZDY2In0sImlhdCI6MTcyMDg3NTcwMn0.p4VbRo9qK5AmzvsGJGNkw2HtiDxwVRJ6AIFmQ99Ug6U'
    },
    
    });
  const json = await response.json()
console.log(json);
setNotes(json) //initial note khali tha aur setNotes ko json kar dia to ais token may jitnay notes thy vo mil gay
}



const addNote = async(title,description,tag)=>{
  // APi Call for AddNote
  const response = await fetch(`${host}/api/notes/addnotes`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
      // ya auth-token lay kar ay hain headers say bad may change karin gay asay hard code nahi karin gay 
      'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MjQ3ZjBmZTUzY2Y5NmNhMDJlZDY2In0sImlhdCI6MTcyMDg3NTcwMn0.p4VbRo9qK5AmzvsGJGNkw2HtiDxwVRJ6AIFmQ99Ug6U'
    },
    body: JSON.stringify({title,description,tag})
    });
    
    // Add a Note
    // Fuction of AddNote 
    const note = await response.json();
    setNotes(notes.concat(note))
    console.log("Adding a new note");
}



// Delete a Note
const deleteNote =async (id)=>{
// Api call for deleteNote 

const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
  method:'DELETE',
  headers:{
    'Content-Type':'application/json',
    // ya auth-token lay kar ay hain headers say bad may change karin gay asay hard code nahi karin gay 
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MjQ3ZjBmZTUzY2Y5NmNhMDJlZDY2In0sImlhdCI6MTcyMDg3NTcwMn0.p4VbRo9qK5AmzvsGJGNkw2HtiDxwVRJ6AIFmQ99Ug6U'
  },
  
  });
const json = response.json();
console.log(json);

  
  console.log("Deleting the note" +id);
const  newNotes = notes.filter((note)=>{return note._id!==id})
setNotes(newNotes)

}

const EditNote = async (id,title,description,tag)=>{
  // API Call 
  // host ak const var banaya hay jo kay sab say auper hay phir update kay endpoint ka link lay hain aur ais may id bhi hay 
  const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
  method:'PUT',
  headers:{
    'Content-Type':'application/json',
    // ya auth-token lay kar ay hain headers say bad may change karin gay asay hard code nahi karin gay 
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MjQ3ZjBmZTUzY2Y5NmNhMDJlZDY2In0sImlhdCI6MTcyMDg3NTcwMn0.p4VbRo9qK5AmzvsGJGNkw2HtiDxwVRJ6AIFmQ99Ug6U'
  },
  body: JSON.stringify({id,title,description,tag}) //ya obj hay (title:title) asay likhin ya title, same bat hay 
});
 const json = await response.json(); //ager responce laty haoy await nahi kia to promise ay gi to awaite karo gay to responce ay ga 
 console.log(json);
 
 let newNotes = JSON.parse(JSON.stringify(notes)) // NOTE: ya karny say hamary notes ki ak deep copy ban jay gi json.parse karny say phir nichay jaha jaha notes tha aus ki jaga newNotes ko dalo

  // Edit a Note Function
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if (element._id === id) {
      newNotes[index].title = title;
      newNotes[index].description = description; //NOTE: ya ham phalay element.title kar rahay thay 
      newNotes[index].tag = tag;
      break;
    }
  }
  setNotes(newNotes);
// NOTE: sath may break bhi nahi kar rahay thay ais liay update nahi ho raha tha 
}
    return (
        // noteContext file may ais context ko banaya hay aur yaha ausi context ko use kia hay 
        <noteContext.Provider value={{notes:notes,setNotes:setNotes,addNote,deleteNote,EditNote,GetNotes}}>
            {props.children} 
         {/* ais ka porps.childern ka matlab jitnay bhi component hain aun ko as props pass ho jay */}
        </noteContext.Provider>
    )
}


//  ya to export to NoteState ho rahi hay to ais ko ham wrap kar dain gay LAYOUT.js may NoteStete component ko wrap karin gay saray components pay dakho layout.js may 
export default NoteState
