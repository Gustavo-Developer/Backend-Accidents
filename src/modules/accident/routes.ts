import { Router } from "express";
import { AccidentController } from "./accident.controller";

const accidentRouter = Router();
const accidentController = new AccidentController();

accidentRouter.post("/", accidentController.create);

export { accidentRouter }