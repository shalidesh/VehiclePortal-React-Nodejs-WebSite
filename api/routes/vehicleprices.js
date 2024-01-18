const router = require("express").Router();


//Nissan
router.post("/nissan", async (req, res) => {
    try {

      console.log("nissan called"); 

      console.log(req.body.regUnReg); 
      console.log(req.body.subModel); 

      const user = {
          username: "nisaan",
          email: "vehicle price",
        };

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Suzuki
router.post("/suzuki", async (req, res) => {
  try {

    console.log("suzuki called"); 

    console.log(req.body.regUnReg); 
    console.log(req.body.subModel); 
    
    const user = {
        username: "suzuki",
        email: "vehicle price",
      };

  res.status(200).json(user);

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
      
        const user = {
            username: "toyota",
            email: "vehicle price",
          };
    
      res.status(200).json(user);
  
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
      
        const user = {
            username: "honda",
            email: "vehicle price",
          };
        res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports=router;