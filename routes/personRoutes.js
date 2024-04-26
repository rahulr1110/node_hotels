import express from "express";
import { Person } from "../models/person.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const person = await Person.create(req.body);

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    if (worktype == "chef" || worktype == "waiter" || worktype == "manager") {
      const response = await Person.find({ work: worktype });
      console.log("response fetched");
      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "internal server error" });
  }
});
export {router} ;
