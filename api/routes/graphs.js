const router = require("express").Router();
const XLSX = require('xlsx');

const models = {
  'Nissan':0 ,
  'Suzuki':1,
  'Toyota': 2,
  'Honda': 3,
  'MICRO': 4
};


//fastmoving
router.post("/fastmoving", async (req, res) => {
    try {

      console.log("fastmoving called"); 
      console.log(req.body.regUnReg);
      console.log(req.body.year); 
      console.log(req.body.model); 
      console.log(req.body.subModel);

        // Specify the path of your Excel file
      const filePath = 'DataBase/graphs.xlsx';

      // Read the file
      const workbook = XLSX.readFile(filePath);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[models[req.body.model]];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      let jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Filter the data based on MODEL and REG/UNREG columns
      jsonData = jsonData.filter(row => row.SUBMODEL === req.body.subModel &&  row.REGISTER === req.body.regUnReg && row.YEAR === parseInt(req.body.year));
     
      let monthOrder = {
        'January': 1, 'February': 2, 'March': 3, 'April': 4, 'May': 5, 'June': 6,
        'July': 7, 'August': 8, 'September': 9, 'October': 10, 'November': 11, 'December': 12
      };

      jsonData.sort((a, b) => monthOrder[a.MONTH] - monthOrder[b.MONTH]);

      res.status(200).json(jsonData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});


//minicar
router.post("/minicar", async (req, res) => {
  try {

    console.log("minicar called"); 

    console.log(req.body.year); 
    console.log(req.body.model); 
    console.log(req.body.subModel);
    
    const user = {
      model: req.body.model,
      year: req.body.year,
      subModel: req.body.subModel,
    };


  res.status(200).json(user);

  } catch (err) {
    res.status(500).json(err);
    
  }
});



//normalcar
router.post("/normalcar", async (req, res) => {
    try {

      console.log("normalcar called"); 

      console.log(req.body.year); 
      console.log(req.body.model); 
      console.log(req.body.subModel);
      
      const user = {
        model: req.body.model,
        year: req.body.year,
        subModel: req.body.subModel,
      };

  
  
    res.status(200).json(user);
  
    } catch (err) {
      res.status(500).json(err);
      
    }
  });
  

//suvcar
router.post("/suvcar", async (req, res) => {
    try {

      console.log("suvcar called"); 

      console.log(req.body.year); 
      console.log(req.body.model); 
      console.log(req.body.subModel);
      
      const user = {
        model: req.body.model,
        year: req.body.year,
        subModel: req.body.subModel,
      };

    
      res.status(200).json(user);
  
    } catch (err) {
        res.status(500).json(err);
      
    }
});


//hybrid
router.post("/hybrid", async (req, res) => {
    try {

      console.log("hybrid called"); 

      console.log(req.body.year); 
      console.log(req.body.model); 
      console.log(req.body.subModel);
      
      const user = {
        model: req.body.model,
        year: req.body.year,
        subModel: req.body.subModel,
      };

    
        res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports=router;