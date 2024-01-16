const router = require("express").Router();


//Nissan
router.get("/nissan", async (req, res) => {
    try {

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
router.get("/suzuki", async (req, res) => {
  try {
    
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
router.get("/toyota", async (req, res) => {
    try {
      
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

router.get("/honda", async (req, res) => {
    try {
      
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