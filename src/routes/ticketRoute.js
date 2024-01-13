import express from "express";
import { createTicket } from "../controllers/TicketController.js";

const ticketRouter = express.Router();

ticketRouter.route("/").post(createTicket);

export default ticketRouter;
