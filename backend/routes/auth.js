const express = require('express')
const router = express.Router()
const User = require("../models/User")

//Create a User using: POST "/api/auth/", Doesn't require Auth
router.post('/',(req,res)=>{
    
    console.log(req.body); 
    //req.body tab kam karay ga jab ham index.js may middleware use karin app.use(express.json()) to phir ham req.body dakh saktay hian thunder client may body may ja kay obj may kuch bhi likho key value may to vo phir show ho ga ager middleware use kia ho ga aur res.send bhi use kia ho ga tab
    
    const user = User(req.body);
    user.save()

    res.send(req.body)

    //.save kia hay aur user ko req.body dia hay to jasay hi request maro gay to body may jo data dalo gay vo save bhi ho jay ga mongodb may aur user ka schema banaya hay to aus kay hisab say data do 

})

module.exports = router