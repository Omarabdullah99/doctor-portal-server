const express= require('express') 
const cors = require('cors')
const morgan =require('morgan')
const mongoose = require('mongoose');
const colors = require('colors')

const app = express()

//*middleware
app.use(morgan("dev"))
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

//*router setup
//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

const MONGODB_URL="mongodb+srv://moviedekha42:0f31b04fJwDu9QmC@doctor-portal.afdnxp8.mongodb.net/?retryWrites=true&w=majority"
const port = 5000;

main().catch(err => console.log(err))
async function main(){
    await mongoose.connect(MONGODB_URL);
    console.log('database connected'.bgCyan.white)
  }

// app.get('/ok', (req, res) => {
//     res.send("doctor portal  is running!")
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})