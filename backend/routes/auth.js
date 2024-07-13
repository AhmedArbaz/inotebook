const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body , validationResult } = require('express-validator');

//Create a User using: POST "/api/auth/createuser", No login required
router.post('/createuser',[
    //asay router may req,res say pahaly ak array bano phir validation lagaty jao 
    body('name',"Enter a valid name atleast 3 character").isLength({min:3}),
    body('email',"Enter a valid email").isEmail(),
    body('password',"Pasword must be atleast 5 character").isLength({min:5})
    
],async (req,res)=>{

    //This is for errors, it returns bad request and error messages instead of complete error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

try {
    //Check whether the User with this email exists already
    //aisay await karna ho ga varna user nahi bany ga error ay ga
    let user = await User.findOne({email: req.body.email});
    //Checking error 
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})
    }

        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })
    
        //ager koi responce nahi bhajo gay to error ay ga ya yad rakhna 
        res.json(user)
} catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured")
}
    
    
    })
    

    //.save kia hay aur user ko req.body dia hay to jasay hi request maro gay to body may jo data dalo gay vo save bhi ho jay ga mongodb may aur user ka schema banaya hay to aus kay hisab say data do 



module.exports = router