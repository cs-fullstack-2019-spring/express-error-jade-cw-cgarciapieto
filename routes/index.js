
const express = require("express");
const router = express.Router();

//simple test to test out server
router.get("/", (req, res)=>{
    res.send("Go to ex1");
});
//creates a GET then adds two placeholders that are rendered at their routes
router.get("ex1/:placeh1/:placeh2/", (req, res)=>{
    res.render("index", {ph: req.params.placeh1, ph2: req.params.placeh2});
});


//exports the modules to router

module.exports = router;