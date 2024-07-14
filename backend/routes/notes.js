const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser.js");
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get All the Notes Using: Get "/api/auth/fetchallnotes".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2: Add a new  Notes Using: Post "/api/notes/addnotes".Login required
router.post("/addnotes",fetchuser,[

    body("title", "Enter a valid Title which has atlest 3 characters").isLength(
      { min: 3 }),
    body( "description","Enter a valid description which has atlest 5 characters").isLength({ min: 5 }),

  ],
  async (req, res) => {
    try {
      //Using Destructuring
      const { title, description, tag } = req.body;
      //This is for errors, it returns bad request and error messages instead of complete error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title, description,tag,user: req.user.id,});
      const saveNote = await note.save();

      res.json(saveNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);



//ROUTE 3:Update existing  Notes Using: Put "/api/notes/updatenotes".Login required
router.put('/updatenote/:id',fetchuser, async (req,res)=>{
  //ya ham nay put request bani hay aur sath may id ki jaga jis user ka note hay aus ki id copy kar kay dalni ho gi url may or route may jab request marin gay thunder may dakh lo 
  const {title,description,tag} = req.body;

try {
    
    //Create a newNote object
    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};
  
    //Find the note to be updated and update it
    let note = await Notes.findById(req.params.id); //ya ham nay kia for checking on id note exist or not
    if(!note){ return res.status(404).send("Not Found")}
  
    //For checking same user is accessing or not
    if(note.user.toString() !== req.user.id){
      return res.status(401).send("Not Allowed");
    }
  
    // now all checking is completed now if there is present a user so he is authorized
    note = await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note})
  
} catch (error) {
  console.log(error.message);
  res.status(500).send("Internal Server Error");
}

})

//ROUTE 4 : Delete existing  Notes Using: Delet "/api/notes/Delete".Login required
router.delete('/deletenote/:id',fetchuser, async (req,res)=>{
  //ya ham nay put request bani hay aur sath may id ki jaga jis user ka note hay aus ki id copy kar kay dalni ho gi url may or route may jab request marin gay thunder may dakh lo 
  const {title,description,tag} = req.body;
  
  try {
    
    //Find the note to be delete and delete it
    let note = await Notes.findById(req.params.id); //ya ham nay kia for checking on id note exist or not
    if(!note){ return res.status(404).send("Not Found")}
  
    //Allow deletion aonly if user owns this Note
    if(note.user.toString() !== req.user.id){
      return res.status(401).send("Not Allowed");
    }
  
    // now all checking is completed now if there is present a user so he is authorized
    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success":"Note has been deleted",note:note})
  
  
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
})


module.exports = router;
