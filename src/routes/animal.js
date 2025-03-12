const express = require("express");
const router = express.Router();
const animalSchema = require("../models/animal");

router.post("/animals",(req,res) => {
    const animal = animalSchema(req,body);
    animal
        .save()
        .then((data)=> res,json(data))
        .catch((errar) => res,json({ message: error}));


});
module.export = router;