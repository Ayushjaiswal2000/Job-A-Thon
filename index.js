import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import session from "express-session";
import HomeController from "./Controller/Home_Controller.js";


const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const homeController =new HomeController();

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("Views", path.resolve("Views"));

app.get("/",homeController.getHome);

export default app;