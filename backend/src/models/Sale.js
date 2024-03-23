import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Product } from "./Product.js";
import { User } from "./User.js";

export const Sale = sequelize.define(
  "sale",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: { type: DataTypes.NUMBER },
    date: { type: DataTypes.DATE },
  },
  {
    timestamps: false,
  }
);

Product.hasMany(Sale, { foreinkey: "product", sourceKey: "id" });
Sale.belongsTo(Product, { foreinkey: "product", targetId: "id" });

User.hasMany(Sale, { foreinkey: "user", sourceKey: "id" });
Sale.belongsTo(User, { foreinkey: "user", targetId: "id" });
