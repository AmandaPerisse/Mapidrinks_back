import { Router } from "express";
import * as productsController from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get('/drinks', productsController.getDrinks);

export default productsRouter;
