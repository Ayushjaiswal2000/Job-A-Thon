import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import HomeController from "./Controller/Home_Controller.js";
import UserController from "./Controller/user.controller.js";
import { formValidationMiddleware,authenticationMiddleware } from "./middleware.js";
import CardController from "./Controller/cards.controller.js";
import postJobController from "./Controller/postjob.controller.js";


const app = express();
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      
    })
  );
const homeController =new HomeController();
const userController = new UserController();
const cardController = new CardController(); 
const PostJob = new postJobController();


app.use(express.json());
app.use(urlencoded({ extended: true }));



app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("Views", path.resolve("Views"));

app.get("/",homeController.getHome);
app.get("/register", userController.getRegister);
app.post("/register",formValidationMiddleware, userController.addUser);
app.get("/login", userController.getLogin);
app.get("/logout", userController.logoutUser);
app.post("/login", userController.loginUser);
app.get("/cards", cardController.getCards);
app.get("/ViewMore/:id", cardController.viewMore);
app.get("/PostJob", authenticationMiddleware, PostJob.getPostjob);
app.post("/addJob", authenticationMiddleware, PostJob.addJob); 

export default app;