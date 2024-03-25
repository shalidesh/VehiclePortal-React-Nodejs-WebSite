const router = require("express").Router();
const XLSX = require('xlsx');


//All
router.get("/all", async (req, res) => {
    try {

      // Specify the path of your Excel file
      const filePath = 'DataBase/portfolio.xlsx';

      // Read the file
      const workbook = XLSX.readFile(filePath);

      console.log(workbook);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      // console.log(jsonData);

      res.status(200).json(jsonData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Suzuki
router.post("/suzuki", async (req, res) => {
  try {

    console.log("suzuki called"); 

    console.log(req.body.id); 
    console.log(req.body.subModel); 

    // Specify the path of your Excel file
    const filePath = 'DataBase/portfolio.xlsx';

    // Read the file
    const workbook = XLSX.readFile(filePath);

    // Parse the first sheet of the workbook
    const sheetName = workbook.SheetNames[1];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);

     res.status(200).json(jsonData);

  } catch (err) {
    res.status(500).json(err);
    
  }
});



//Nissan
router.post("/nissan", async (req, res) => {
    try {

      console.log("nissan called"); 

      console.log(req.body.id); 
      console.log(req.body.subModel); 

      // Specify the path of your Excel file
      const filePath = 'DataBase/portfolio.xlsx';

      // Read the file
      const workbook = XLSX.readFile(filePath);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[2];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log(jsonData);

      res.status(200).json(jsonData);

  
    } catch (err) {
      res.status(500).json(err);
      
    }
  });
  

//Toyota
router.post("/toyota", async (req, res) => {
    try {
      console.log("toyota called"); 

      console.log(req.body.id); 
      console.log(req.body.subModel); 

      // Specify the path of your Excel file
      const filePath = 'DataBase/portfolio.xlsx';

      // Read the file
      const workbook = XLSX.readFile(filePath);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[3];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

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

      console.log(req.body.id); 
      console.log(req.body.subModel); 

      // Specify the path of your Excel file
      const filePath = 'DataBase/portfolio.xlsx';

      // Read the file
      const workbook = XLSX.readFile(filePath);

      // Parse the first sheet of the workbook
      const sheetName = workbook.SheetNames[4];
      const worksheet = workbook.Sheets[sheetName];

      // Convert the worksheet to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      console.log(jsonData);

      res.status(200).json(jsonData);
      
      
    } catch (err) {
      res.status(500).json(err);
    }
  });


  
//Micro
router.post("/micro", async (req, res) => {
  try {
    console.log("toyota called"); 

    console.log(req.body.id); 
    console.log(req.body.subModel); 

    // Specify the path of your Excel file
    const filePath = 'DataBase/portfolio.xlsx';

    // Read the file
    const workbook = XLSX.readFile(filePath);

    // Parse the first sheet of the workbook
    const sheetName = workbook.SheetNames[5];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    console.log(jsonData);

    res.status(200).json(jsonData);

  } catch (err) {
      res.status(500).json(err);
    
  }
});
  

module.exports=router;