import React from 'react'

const NoteItem = (props) => {
  const {notes} = props; //ya destructing ki 
  return (
    <div className='col-md-3'> 
    {/* ya col-md-3 karny say ya column may ho gaya aur Notes.js may container hata hay row kar dia  */}
      <div class="card my-3" >
  <div class="card-body">
    <h5 class="card-title">{notes.title}</h5>
    <p class="card-text">{notes.description}</p>
   <button className='btn btn-primary'>{notes.tag}</button>
  </div>
</div>
    </div>
  )
}

export default NoteItem
