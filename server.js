import express from "express";
import connectDB from "./db.js";
import bodyParser from "body-parser";
import { router as personRoute } from "./routes/personRoutes.js";
import { router as menuRouter } from "./routes/menuitemRoutes.js";
import { Strategy as LocalStrategy } from "passport-local";
import { Person } from "./models/person.js";
import { passport as passport } from "./auth.js";
import dotenv from "dotenv";
// import passport from "passport";
dotenv.config();
const app = express();
app.use(bodyParser.json());
connectDB();

//passport

//middleware functions
const logResult = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to : ${req.originalUrl}`
  );
  next();
};
app.use(passport.initialize());
const localAuthmiddleware = passport.authenticate("local", { session: false });
app.get("/", localAuthmiddleware, (req, res) => {
  res.send("welcom to our hotel");
});
app.use("/person", personRoute);
app.use("/menu", menuRouter);

app.listen(process.env.PORT, () => {
  console.log("server started");
});
