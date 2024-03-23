import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Log } from "./Log.js";

const foreinkey = "user";
const sourceKey = "id";
const targetId = "id";

export const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    idNumber: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    phone: { type: DataTypes.NUMBER },
    mail: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
  },
  {
    timestamps: false,
  }
);

// User.belongsTo(Log, { foreinkey, sourceKey });
// Log.hasMany(User, { foreinkey, targetId });
