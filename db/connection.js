const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "rootroot", // TODO- Change this to your own password
  database: "employees",
  port: 3001, // Default PostgreSQL port
});

module.exports = pool;
