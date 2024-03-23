import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Log = sequelize.define(
  "log",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    action: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
  },
  {
    timestamps: false,
  }
);
