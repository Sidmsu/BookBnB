const express = require("express");
const router =  express.Router();
const users =  require("./routes/user.js");

router.get("/", (req, res) => {
    res.send("GET for users");
});

router.get("/:id", (req, res) => {
    res.send("GET for show users");
});

router.post("/", (req,res) => {
    res.send("POST for show users");
});

router.delete("/:id", (req,res) => {
    res.send("DELETE for show users");
});


module.exports = router;
//user.js//