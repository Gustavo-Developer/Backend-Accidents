import express from "express";
import { accidentRouter } from "./modules/accident/routes";
import { clientRouter } from "./modules/client/routes";

const app = express();

app.use(express.json());

app.use("/clients", clientRouter);
app.use("/accident", accidentRouter);





app.listen(3000, () => console.log("Server in Running"))