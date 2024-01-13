import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../util/database.js";

export const Ticket = sequelize.define(
  "Ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    issue_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    issue_country: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    issue_warehouse: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issue_account_id: {
      type: DataTypes.INTEGER,
    },
    issue_account_type: {
      type: DataTypes.SMALLINT,
    },
    issue_special_memo: {
      type: DataTypes.STRING(255),
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "tech_support_issues",
  }
);
