const router = require("express").Router();


//fastmoving
router.get("/fastmoving", async (req, res) => {
    try {

        const user = {
            username: "fastmoving",
            email: "Graphs",
          };

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
});


//minicar
router.get("/minicar", async (req, res) => {
  try {
    
    const user = {
        username: "minicar",
        email: "Graphs",
      };


  res.status(200).json(user);

  } catch (err) {
    res.status(500).json(err);
    
  }
});



//normalcar
router.get("/normalcar", async (req, res) => {
    try {
      
      const user = {
          username: "normalcar",
          email: "Graphs",
        };
  
  
    res.status(200).json(user);
  
    } catch (err) {
      res.status(500).json(err);
      
    }
  });
  

//suvcar
router.get("/suvcar", async (req, res) => {
    try {
      
        const user = {
            username: "suvcar",
            email: "Graphs",
          };
    
    
      res.status(200).json(user);
  
    } catch (err) {
        res.status(500).json(err);
      
    }
});


//hybrid
router.get("/hybrid", async (req, res) => {
    try {
      
        const user = {
            username: "hybrid",
            email: "portfolio",
          };
    
        res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports=router;