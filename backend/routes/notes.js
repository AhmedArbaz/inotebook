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

module.exports = router;
