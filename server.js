import express from "express";
import connectDB from "./db.js";
import bodyParser from "body-parser";
import { Person } from "./models/person.js";
import { MenuItem } from "./models/menu.js";
import { router as personRoute } from "./routes/personRoutes.js";
import { router as menuRouter } from "./routes/menuitemRoutes.js";

const app = express();
connectDB();
app.use(bodyParser.json());
app.use("/person", personRoute);
app.use("/menu", menuRouter);
//person
// app.post("/person", async (req, res) => {
//   try {
//     const person = await Person.create(req.body);

//     res.status(200).json(person);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.get("/persons", async (req, res) => {
//   try {
//     const persons = await Person.find();
//     res.status(200).json(persons);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// app.get("/person/:worktype", async (req, res) => {
//   try {
//     const worktype = req.params.worktype;
//     if (worktype == "chef" || worktype == "waiter" || worktype == "manager") {
//       const response = await Person.find({ work: worktype });
//       console.log("response fetched");
//       res.status(200).json(response);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(200).json({ error: "internal server error" });
//   }
// });

//menu items
// app.post("/menu", async (req, res) => {
//   try {
//     const menu = await MenuItem.create(req.body);
//     res.status(200).json(menu);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

app.listen(3000, () => {
  console.log("server started");
});
