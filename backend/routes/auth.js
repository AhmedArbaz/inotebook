const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser.js")
require('dotenv').config()

//ya jwt token bana rahay hain aur ya idealy config file ya .env may
const JWT_SECRET = process.env.JWT_SECRET; // ya secure jaga pay honi chiay eg env may ya string jwt banaty hoay sath may di jay gi nichay dakh lo jaha jwt banaya hay

//rOUTE 1: Create a User using: POST "/api/auth/createuser", No login required
router.post(
  "/createuser",
  [
    //asay router may req,res say pahaly ak array bano phir validation lagaty jao
    body("name", "Enter a valid name atleast 3 character").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Pasword must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false; //yaha bhi success vala lagaya signup kay liay jasay login may lagaya tha
    //This is for errors, it returns bad request and error messages instead of complete error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    try {
      //Check whether the User with this email exists already
      //aisay await karna ho ga varna user nahi bany ga error ay ga
      let user = await User.findOne({ email: req.body.email });
      //Checking error
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry a user with this email already exists" });
      }

      //Creating password secure using bcrypt package we use in it salt

      // as well eg (bcrypt to hash bany ga lakin ager ksis nay bhot common password laga dia to ham admin honay ki vaja say khud say salt add kar rahay hain ya manually kuch aur add kar day ga hash may

      const salt = await bcrypt.genSalt(10); //ya bhi promise return karta hay ais liay await kia
      const secPass = await bcrypt.hash(req.body.password, salt);

      //Finally user creating
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      //making JWT Token ais may 2 things hoti hay data, secret to ham nay data may id di, secret may ham khud say ak string banaty hain vo day di
      const data = {
        user: {
          id: user.id, //ya ham id bhaj rahay hain user ko data may pura user ki info nahi
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);

      //ager koi responce nahi bhajo gay to error ay ga ya yad rakhna ya user nahi dia jata token dia jata hay vo abhi banaya hay vo dain gay
      // res.json(user)
      success = true
      res.json({success, authToken: authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


//ROUTE 2: Authenticate a User Using: Post "/api/auth/login".No login required Creating Login

router.post(
  "/login",
  [
    //asay router may req,res say pahaly ak array bano phir validation lagaty jao
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter your password"),
  ],
  async (req, res) => {
    //If there are errors, return Bad request and the errors
    let success = false //ya success bani hay jo kay frontend may hamin success true and false dakay gi
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Using Destructuring for login
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false
        return res
          .status(400)
          .json({success, error: "Plese try to login with correct corendenials" });
      }

      //Compareing the Password
      const passwordCompare = await bcrypt.compare(password, user.password);
      //ya promise return kar raha hay to await karo
      if (!passwordCompare) {
        success = false
        return res
          .status(400)
          .json({success, error: "Plese try to login with correct corendenials" });
      }

      //If all things are correct we provide user a auth token same like above
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success:success, authToken: authToken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3: Get loggedin User Details Using: Post "/api/auth/getuser".Login required

router.post("/getuser",fetchuser, async (req, res) => {
try {
         
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)

        }

 catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }})



module.exports = router;
