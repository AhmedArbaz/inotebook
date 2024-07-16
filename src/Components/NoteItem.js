import React from 'react'

const NoteItem = (props) => {
  const {notes} = props; //ya destructing ki 
  return (
    <div className='col-md-3'> 
    {/* ya col-md-3 karny say ya column may ho gaya aur Notes.js may container hata hay row kar dia  */}
      <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">{notes.title}</h5>
    <p className="card-text">{notes.description}</p>
    <i className="fa-solid fa-trash-can mx-2"></i>
    <i className="fa-solid fa-pen-to-square mx-2"></i>
  </div>
</div>
    </div>
  )
}

export default NoteItem
