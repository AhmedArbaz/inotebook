const mongoose = require ('mongoose')

const mongoeURI = "mongodb://localhost:27017/"


const connectToMongo = async()=>{
    try {
        await mongoose.connect(mongoeURI);
        console.log("Connection successful To DB");
    } catch (error) {
        console.log("Connection successful to DB");
        process.exit(0)
    }
}

module.exports = connectToMongo