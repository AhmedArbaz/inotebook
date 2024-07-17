const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') //ya install kia Q kay frond-end may api call pay privicy remove karni thi



connectToMongo();
const app = express()
const port = 5000 //5000 kia Q kay 3000 pay react app chalay gi


// using middleware
app.use(express.json()) //ab ham request ki body may kuch bhi bhaj sakty hain eg thunder client may dal kay use kar kay dakh lo 
app.use(cors()) //ya use kar lia cors ko for front-end privicy remove
// Available routes

app.use('/api/auth', require("./routes/auth"))
app.use('/api/notes', require("./routes/notes"))


//ya default route hay jo kay yahi rahnay dia hay 
app.get('/', (req, res) => {
  res.send('Hello Ahmed!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})