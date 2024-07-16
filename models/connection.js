import { Sequelize } from "sequelize";

const connection = new Sequelize("db_parking", "pebz", "Feb@0602", {
  host: "localhost",
  dialect: "mysql",
});

export default connection