import { Router } from "express";
import * as productsController from "../controllers/productsController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import getDrinkSchema from "../schemas/getDrinkSchema.js";

const productsRouter = Router();

productsRouter.get('/drinks', productsController.getDrinks);
productsRouter.post('/drinks', validateSchemaMiddleware(getDrinkSchema), productsController.getSpecificDrink);

export default productsRouter;
