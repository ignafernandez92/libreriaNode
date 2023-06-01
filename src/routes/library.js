const express = require("express");
const bodyParser = require("body-parser");
const libraryservices = require("../services/library");
const { Library } = require("../models");
const router = express.Router();


router.get("/:libraryId", async (req, res) => {
    const reqLibrary = req.reqLibrary;
    const libraryId = req.params.libraryId;
    try {
      const library = await libraryservices.getLibrary(libraryId);
      res.status(200).json(library);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  router.get("/", async (req, res) => {
    const { titulo, autor } = req.query;
    try {
      let librarys;
      if (Object.keys(req.query).length !== 0) {
        librarys = await libraryservices.getLibrary({
          ...(titulo && { titulo }),
          ...(autor && { autor }),
        }); 
      } else {
        librarys = await libraryservices.getLibrary();
      }
  
      res.status(200).json(librarys);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.post("/", async (req, res) => {
    const {name, location, telefono, id} = req.body;
    try {
      const newLibrary = await libraryservices.createLibrary({
        name,
        location,
        telefono,
        id
      });
      res.status(201).json(newLibrary);
    } catch (error) {
        console.log(error);
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;