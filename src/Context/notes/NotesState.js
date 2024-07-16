import noteContext from "./noteContext";
import { useState } from "react";
//ya import kia bany hoay context ko aur use kia 


const NoteState = (props)=>{
const initialNotes = [
    {
        "_id": "6693bfceb6ea37e81a745f1f",
        "user": "669247f0fe53cf96ca02ed66",
        "title": "My Title Exersice",
        "description": "Do Exersice hard",
        "tag": "In Gym",
        "Date": "2024-07-14T12:08:46.603Z",
        "createdAt": "2024-07-14T12:08:46.604Z",
        "updatedAt": "2024-07-14T12:10:08.226Z",
        "__v": 0
      },
      {
        "_id": "6693c02eb6ea37e81a745f24",
        "user": "669247f0fe53cf96ca02ed66",
        "title": "Exersice",
        "description": "Hard exersice",
        "tag": "Gym",
        "Date": "2024-07-14T12:10:22.661Z",
        "createdAt": "2024-07-14T12:10:22.661Z",
        "updatedAt": "2024-07-14T12:10:22.661Z",
        "__v": 0
      },
      {
        "_id": "6693d0196e7d237bde2ae3cd",
        "user": "669247f0fe53cf96ca02ed66",
        "title": "My Title Exersice",
        "description": "Do Exersice hard",
        "tag": "In Gym",
        "Date": "2024-07-14T13:18:17.475Z",
        "createdAt": "2024-07-14T13:18:17.482Z",
        "updatedAt": "2024-07-14T13:20:46.041Z",
        "__v": 0
      },
      {
        "_id": "6694ca1b33a76c37871b3fb8",
        "user": "669247f0fe53cf96ca02ed66",
        "title": "Go sleep",
        "description": "Sleep atleast 6 hours for good results",
        "tag": "Sleep",
        "Date": "2024-07-15T07:04:59.010Z",
        "createdAt": "2024-07-15T07:04:59.015Z",
        "updatedAt": "2024-07-15T07:04:59.015Z",
        "__v": 0
      },
      {
        "_id": "6694caa2926316906f9bb31d",
        "user": "669247f0fe53cf96ca02ed66",
        "title": "Go sleep",
        "description": "Sleep atleast 6 hours for good results",
        "tag": "Sleep",
        "Date": "2024-07-15T07:07:14.890Z",
        "createdAt": "2024-07-15T07:07:14.896Z",
        "updatedAt": "2024-07-15T07:07:14.896Z",
        "__v": 0
      }
]
const [notes, setNotes] = useState(initialNotes);
    return (
        // noteContext file may ais context ko banaya hay aur yaha ausi context ko use kia hay 
        <noteContext.Provider value={{notes:notes,setNotes:setNotes}}>
            {props.children} 
         {/* ais ka porps.childern ka matlab jitnay bhi component hain aun ko as props pass ho jay */}
        </noteContext.Provider>
    )
}


//  ya to export to NoteState ho rahi hay to ais ko ham wrap kar dain gay LAYOUT.js may NoteStete component ko wrap karin gay saray components pay dakho layout.js may 
export default NoteState