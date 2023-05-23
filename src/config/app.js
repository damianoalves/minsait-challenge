import express from "express";
import helmet from "helmet";
import cors from "cors";
import router from "../app/routes/v1/index.js";
import connectMongo from "./database.js";

const app = express();

app.use(helmet());

app.use(express.json());

app.use(cors());
app.options('*', cors());

app.use('/v1', router);

//connect to database
connectMongo();



export default app;