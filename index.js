const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
dotenv.config()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 8000
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


    //  ALL GET API STARTED

    app.get('/allFacilities',async(req,res)=>{

        const result = await facilitiesCollection.find().toArray()
        res.json(result)
    })
   

    // get the signle product by id
    app.get('/allFacilities/:id', async(req,res)=>{

      const {id} = req.params

        const result = await facilitiesCollection.findOne({_id: new ObjectId(id)})
        res.json(result)
    })
   

    //  ALL GET API END
///------------------------------------------------------------------------

    //  ALL POST API STARTED

    app.get('/allFacilities',async(req,res)=>{

        const result = await facilitiesCollection.find().toArray()
        res.json(result)
    })
   

    //  ALL POST API END
///------------------------------------------------------------------------


    //  ALL PATCH API STARTED

    app.get('/allFacilities',async(req,res)=>{

        const result = await facilitiesCollection.find().toArray()
        res.json(result)
    })
   

    //  ALL PATCH API END
///------------------------------------------------------------------------



    //  ALL DELETE API STARTED

    app.get('/allFacilities',async(req,res)=>{

        const result = await facilitiesCollection.find().toArray()
        res.json(result)
    })
   

    //  ALL DELETE API END
///------------------------------------------------------------------------









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



