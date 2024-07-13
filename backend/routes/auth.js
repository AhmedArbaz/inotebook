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
    
],(req,res)=>{
    
    // console.log(req.body); 
    //req.body tab kam karay ga jab ham index.js may middleware use karin app.use(express.json()) to phir ham req.body dakh saktay hian thunder client may body may ja kay obj may kuch bhi likho key value may to vo phir show ho ga ager middleware use kia ho ga aur res.send bhi use kia ho ga tab
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user=>res.json(user))
    .catch(err=> {console.log(err)
        res.json({error:"Please enter unique value for email",message:err.message})
    })
    

    //.save kia hay aur user ko req.body dia hay to jasay hi request maro gay to body may jo data dalo gay vo save bhi ho jay ga mongodb may aur user ka schema banaya hay to aus kay hisab say data do 

})

module.exports = router