import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";

export const Role = sequelize.define(
  "role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

User.belongsTo(Role, { foreinkey: "role", sourceKey: "id" });
Role.hasMany(User, { foreinkey: "role", targetId: "id" });
