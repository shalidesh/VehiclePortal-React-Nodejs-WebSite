const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const port = 3001;

const vehicleRoute=require("./routes/vehicleprices");
const portFolioRoute=require("./routes/portfolio");
const graphsRoute=require("./routes/graphs");
const userRoute=require("./routes/users");

app.use(express.json());

const uri = "mongodb+srv://shalidesh:shalidesh@port-folio.o3cdqkl.mongodb.net/portfolio?retryWrites=true&w=majority";


async function connect() {
  try {
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch(error) {
    console.log("Error connecting to MongoDB: ", error)
  }
}

connect()

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/vehicleprice',vehicleRoute);
app.use('/portfolio',portFolioRoute);
app.use('/graphs',graphsRoute);
app.use('/auth',userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});