import { registerUser, authenticateUser } from "../Models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    res.render("user-register");
  };

  getLogin = (req, res, next) => {
    res.render("user-login");
  };

  addUser = (req, res) => {
    const { name, email, password } = req.body;
    const newUser = { id: Date.now(), name, email, password };
    registerUser(newUser);
    res.status(200).redirect("/login");
  };

  loginUser = (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };
    const authenticated = authenticateUser(user);
    if (authenticated) {
      // Redirect to "/cards" route after successful login
      res.redirect("/cards");
  } else {
      res.json({ success: false, message: "login failed" });
    }
  };
}
