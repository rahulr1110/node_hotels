import express from "express";
import { MenuItem } from "../models/menu.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const menu = await MenuItem.create(req.body);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.get("/", async (req, res) => {
  try {
    const menu = await MenuItem.find(req.body);
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router };
