import { Router } from "express";
import * as homeController from "../controllers/homeController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import registerSchema from "../schemas/registerSchema.js";

const homeRouter = Router();

export default homeRouter;
