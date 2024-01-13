import express from "express";
import "dotenv/config";
import ticketRouter from "./routes/ticketRoute.js";
import { sequelize } from "./util/database.js";

const app = express();
const port = 8080;

app.use(express.json());

app.use("/tickets", ticketRouter);

sequelize.authenticate();

app.listen(process.env.PORT || port, () => {
  console.log("Server started on port 8080");
});
