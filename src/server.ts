import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute"
import userRoute from "./routes/userRoute"
import bodyParser from "body-parser";
// import passwordhash from "password-hash"
// const bodyParser = require('body-parser')
dotenv.config();
import {AppDataSource} from "./data-source"
const app: Express = express();
const port = process.env.PORT || 3000;

//connect the db
AppDataSource.initialize().then(async () => {
  console.log("database is connected");
}).catch(error => console.log(error))

app.use(bodyParser.json())

app.use("/api/auth",authRoute)

app.use("/api/users",userRoute)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello guy");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});