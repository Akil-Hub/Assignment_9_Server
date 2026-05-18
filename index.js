const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
dotenv.config()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 7000
const uri = process.env.MONGO_DB_URI
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
  
    await client.connect();


    const db = client.db('sports_management')
    const facilitiesCollection = db.collection('sportsFacilities')
   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);











app.get('/',(req,res)=>{
    res.send('hello world Server is running fine')
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})



