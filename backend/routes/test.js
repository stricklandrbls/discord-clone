
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) =>{
    res.status(400).send("Good Connection!")
})

module.exports = router