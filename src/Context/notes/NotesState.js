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
    body: JSON.stringify({title:title,description:description,tag:tag})
    });
    // const json = response.json();
    
    // Add a Note
    // Fuction of AddNote 
    console.log("Adding a new note");
 const  note = {"_id": "6694caa2926316906f9bb31d",
    "user": "669247f0fe53cf96ca02ed66",
    "title": title,
    "description": description,
    "tag": tag,
    "Date": "2024-07-15T07:07:14.890Z",
    "createdAt": "2024-07-15T07:07:14.896Z",
    "updatedAt": "2024-07-15T07:07:14.896Z",
    "__v": 0
    }
response.json()
setNotes(notes.concat(note))
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
  method:'POST',
  headers:{
    'Content-Type':'application/json',
    // ya auth-token lay kar ay hain headers say bad may change karin gay asay hard code nahi karin gay 
    'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MjQ3ZjBmZTUzY2Y5NmNhMDJlZDY2In0sImlhdCI6MTcyMDg3NTcwMn0.p4VbRo9qK5AmzvsGJGNkw2HtiDxwVRJ6AIFmQ99Ug6U'
  },
  body: JSON.stringify({title,description,tag}) //ya obj hay (title:title) asay likhin ya title, same bat hay 
  });
 response.json();
  // Edit a Note Function
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
      
    }
    
  }

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
