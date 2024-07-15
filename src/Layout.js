import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import NoteState from './Context/notes/NotesState'
//ab yaha dakho ham nay NoteState ko yaha wrap kia Q kay navbar kay bad yaha outlet may saray component ain gay ais liay to check krnay kay liay ya kam bhi kar raha hay ya nahi to ham nay about component may use kar kay daka 

//Jab context banana tha to create context use kia ab use karna hay to useContext use karin gay About.js may dakho
const Layout = () => {
  return (
    <div>
      <NoteState> 

      <Navbar/>
      {/* ya outlet aisi liay use kia kay navbar sab may ay but aus kay bad sab change hotay jain  */}
      <Outlet/> 

      </NoteState>


    </div>
  )
}

export default Layout
