import { Ticket } from "../models/tickets.js";

export const createTicket = (req, res) => {
  console.log("req - ", req.body);
  //   res.status(200).json({
  //     msg: "received",
  //   });
  Ticket.create({
    issue_type: req.body.issue_type,
    issue_country: req.body.issue_country,
    issue_warehouse: req.body.issue_warehouse,
    issue_account_id: req.body.issue_account_id,
    issue_account_type: req.body.issue_account_type,
    issue_special_memo: req.body.issue_special_memo,
    created_at: req.body.created_at,
  });

  res.status(200).json({ ...req.body });
};
