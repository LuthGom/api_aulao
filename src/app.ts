import express from "express";
import cors from "cors";
import db from "./database/dbConnection";
import { routes } from "./routes/usuario.routes";
const app = express();


app.use(express.json());

app.use(cors());

db;
routes(app);

export default app;
