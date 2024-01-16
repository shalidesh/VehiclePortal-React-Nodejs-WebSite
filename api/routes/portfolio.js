const router = require("express").Router();


//All
router.get("/all", async (req, res) => {
    try {

        const user = {
            username: "all",
            email: "portfolio",
          };

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//Suzuki
router.get("/suzuki", async (req, res) => {
  try {
    
    const user = {
        username: "suzuki",
        email: "portfolio",
      };


  res.status(200).json(user);

  } catch (err) {
    res.status(500).json(err);
    
  }
});



//Nissan
router.get("/nissan", async (req, res) => {
    try {
      
      const user = {
          username: "nissan",
          email: "portfolio",
        };
  
  
    res.status(200).json(user);
  
    } catch (err) {
      res.status(500).json(err);
      
    }
  });
  

//Toyota
router.get("/toyota", async (req, res) => {
    try {
      
        const user = {
            username: "toyota",
            email: "portfolio",
          };
    
    
      res.status(200).json(user);
  
    } catch (err) {
        res.status(500).json(err);
      
    }
});


//Honda
router.get("/honda", async (req, res) => {
    try {
      
        const user = {
            username: "honda",
            email: "portfolio",
          };
    
        res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports=router;