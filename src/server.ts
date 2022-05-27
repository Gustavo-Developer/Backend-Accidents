import express from "express";
import { clientRouter } from "./modules/client/routes";

const app = express();

app.use(express.json());

app.use("/client",clientRouter);

app.listen(3000, () => console.log("Server in Running"))