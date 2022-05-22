import { Router } from "express";
import * as homeController from "../controllers/homeController.js";

const homeRouter = Router();

homeRouter.get('/home', homeController.getCategories);

export default homeRouter;
