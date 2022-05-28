import { Router } from "express";
import { ClientController } from "./client.controller";

const clientRouter = Router();
const clientController = new ClientController();

clientRouter.post("/client/create", clientController.create);
clientRouter.get("/clients", clientController.list);
clientRouter.put("/client/:id", clientController.updateClientById);
clientRouter.delete("/client/:id", clientController.deleteClientById);

export { clientRouter };
