import express, { Express } from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/errorHandler";
import route from "./routes/users"
import { json } from "body-parser";

const app: Express = express();
app.use(json())
app.use(route)
app.use(errorHandler);

const port: number|string = process.env.PORT||8000;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})