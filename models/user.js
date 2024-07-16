import connection from "./connection.js";
import { DataTypes } from "sequelize";

const User = connection.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { timestamps: false, tableName: "user" }
);

export default User;
