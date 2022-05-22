import { Router } from "express";
import loginRouter from "./loginRouter.js";
import signupRouter from "./signupRouter.js";
import logoutRouter from "./logoutRouter.js";
import homeRouter from "./homeRouter.js";
import productsRouter from "./productsRouter.js";

const router = Router();
router.use(signupRouter);
router.use(loginRouter);
router.use(logoutRouter);
router.use(homeRouter);
router.use(productsRouter);

export default router;
