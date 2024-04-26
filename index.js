import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import HomeController from "./Controller/Home_Controller.js";
import UserController from "./Controller/user.controller.js";


const app = express();
const homeController =new HomeController();
const userController = new UserController();

app.use(express.json());
app.use(urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));


app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("Views", path.resolve("Views"));

app.get("/",homeController.getHome);
app.get("/register", userController.getRegister);
app.post("/register", userController.addUser);
app.get("/login", userController.getLogin);
app.post("/login", userController.loginUser);

export default app;