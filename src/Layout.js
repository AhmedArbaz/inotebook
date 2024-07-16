import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import NoteState from './Context/notes/NotesState'
import Alert from './Components/Alert'
//ab yaha dakho ham nay NoteState ko yaha wrap kia Q kay navbar kay bad yaha outlet may saray component ain gay ais liay to check krnay kay liay ya kam bhi kar raha hay ya nahi to ham nay about component may use kar kay daka 

//Jab context banana tha to create context use kia ab use karna hay to useContext use karin gay About.js may dakho
const Layout = () => {
  return (
    <div>
      <NoteState> 

      <Navbar/>
      <Alert msg="This is alert"/>
      {/* ya outlet aisi liay use kia kay navbar sab may ay but aus kay bad sab change hotay jain  */}
      <div className="container"> 
        {/* sab ko container class dani thi aisi liay direct outlet ko hi day di hay  */}
      <Outlet/> 
      </div>

      </NoteState>


    </div>
  )
}

export default Layout
