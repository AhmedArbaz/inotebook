const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body , validationResult } = require('express-validator');
const bcrypt = require ('bcrypt');
var jwt = require('jsonwebtoken')

//ya jwt token bana rahay hain aur ya idealy config file ya .env may 
const JWT_SECRET = 'Ahmedisagoodb$oy'; // ya secure jaga pay honi chiay eg env may ya string jwt banaty hoay sath may di jay gi nichay dakh lo jaha jwt banaya hay 


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

    //Creating password secure using bcrypt package we use in it salt
    
    // as well eg (bcrypt to hash bany ga lakin ager ksis nay bhot common password laga dia to ham admin honay ki vaja say khud say salt add kar rahay hain ya manually kuch aur add kar day ga hash may 

    const salt = await bcrypt.genSalt(10); //ya bhi promise return karta hay ais liay await kia 
    const secPass = await bcrypt.hash(req.body.password,salt);

    //Finally user creating
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        
        //making JWT Token ais may 2 things hoti hay data, secret to ham nay data may id di, secret may ham khud say ak string banaty hain vo day di 
        const data = {
            user:{
                id:user.id //ya ham id bhaj rahay hain user ko data may pura user ki info nahi 
            }
        }

        const authToken = jwt.sign(data,JWT_SECRET)

        //ager koi responce nahi bhajo gay to error ay ga ya yad rakhna ya user nahi dia jata token dia jata hay vo abhi banaya hay vo dain gay
        // res.json(user)

        res.json({authToken:authToken})



} catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured")
}
    
    
    })
    

    //.save kia hay aur user ko req.body dia hay to jasay hi request maro gay to body may jo data dalo gay vo save bhi ho jay ga mongodb may aur user ka schema banaya hay to aus kay hisab say data do 



module.exports = router