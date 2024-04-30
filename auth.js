import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Person } from "./models/person.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    //authentication
    try {
      const user = await Person.findOne({ username });

      if (!user) {
        return done(null, false, { message: "incoorect username" });
      }
      const isPasswordMatch = await user.comparePassword(password);
      if (isPasswordMatch) {
        console.log(isPasswordMatch, "hiii");
        return done(null, user);
      } else {
        return done(null, false, { message: "incorrect password" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

export { passport };
