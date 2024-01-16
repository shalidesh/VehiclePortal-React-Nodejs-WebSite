const express = require('express');
const app = express();
const port = 3001;

const vehicleRoute=require("./routes/vehicleprices");
const portFolioRoute=require("./routes/portfolio");
const graphsRoute=require("./routes/graphs");

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/vehicleprice',vehicleRoute);
app.use('/portfolio',portFolioRoute);
app.use('/graphs',graphsRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});