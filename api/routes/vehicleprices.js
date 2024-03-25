const router = require("express").Router();
const XLSX = require('xlsx');


//Nissan
router.post("/nissan", async (req, res) => {
    try {
      console.log("nissan called in vehicle price"); 

      console.log(req.body.regUnReg); 
      console.log(req.body.subModel); 

      // Specify the path of your Excel file
      const filePath = 'DataBase/vehicleprices.xlsx';

      console.log(filePath);

      // Read the file
      const workbook = XLSX.readFile(filePath);

      console.log(workbook);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      let jsonData = XLSX.utils.sheet_to_json(worksheet);

      // Filter the data based on MODEL and REG/UNREG columns
      jsonData = jsonData.filter(row => row.MODEL === req.body.subModel && row['REG/UNREG'] === req.body.regUnReg);

      // Sort the data based on YEAR column
      jsonData.sort((a, b) => a.YEAR - b.YEAR);

      console.log(jsonData);

      res.status(200).json(jsonData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


//Suzuki
router.post("/suzuki", async (req, res) => {
  try {

    console.log("suzuki called"); 

    console.log(req.body.regUnReg); 
    console.log(req.body.subModel); 
    
    // Specify the path of your Excel file
    const filePath = 'DataBase/vehicle-prices.xlsx';

    // Read the file
    const workbook = XLSX.readFile(filePath);

    // Parse the first sheet of the workbook
    const sheetName = workbook.SheetNames[1];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Filter the data based on MODEL and REG/UNREG columns
    jsonData = jsonData.filter(row => row.MODEL === req.body.subModel && row['REG/UNREG'] === req.body.regUnReg);

    // Sort the data based on YEAR column
    jsonData.sort((a, b) => a.YEAR - b.YEAR);

    res.status(200).json(jsonData);

  } catch (err) {
    res.status(500).json(err);
    
  }
});

//Toyota
router.post("/toyota", async (req, res) => {
    try {

      console.log("toyota called"); 

      console.log(req.body.regUnReg); 
      console.log(req.body.subModel); 
      
       // Specify the path of your Excel file
      const filePath = 'DataBase/vehicle-prices.xlsx';

      // Read the file
      const workbook = XLSX.readFile(filePath);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[3];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      let jsonData = XLSX.utils.sheet_to_json(worksheet);
      // Filter the data based on MODEL and REG/UNREG columns
      jsonData = jsonData.filter(row => row.MODEL === req.body.subModel && row['REG/UNREG'] === req.body.regUnReg);

      // Sort the data based on YEAR column
      jsonData.sort((a, b) => a.YEAR - b.YEAR);

      console.log(jsonData);

      res.status(200).json(jsonData);
    
  
    } catch (err) {
      res.status(500).json(err);
      
    }
  });


//Honda
router.post("/honda", async (req, res) => {
    try {

        console.log("honda called"); 

        console.log(req.body.regUnReg); 
        console.log(req.body.subModel); 
      
       // Specify the path of your Excel file
       const filePath = 'DataBase/vehicle-prices.xlsx';

       // Read the file
       const workbook = XLSX.readFile(filePath);
 
       // Parse the first sheet of the workbook
       const sheetName = workbook.SheetNames[2];
       const worksheet = workbook.Sheets[sheetName];
 
       // Convert the worksheet to JSON
       let jsonData = XLSX.utils.sheet_to_json(worksheet);
 
       jsonData = jsonData.filter(row => row.MODEL === req.body.subModel && row['REG/UNREG'] === req.body.regUnReg);

       // Sort the data based on YEAR column
       jsonData.sort((a, b) => a.YEAR - b.YEAR);
 
       console.log(jsonData);
 
       res.status(200).json(jsonData);

    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports=router;