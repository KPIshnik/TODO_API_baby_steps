const pgConfig = {
  host: process.env.PGHOST || "localhost",
  user: process.env.PGUSER || "kpishnik",
  database: process.env.PGDATABASE || "list_api_first_try",
  password: process.env.PGPASSWORD || "123",
  port: process.env.PGPORT || "5432",
};

module.exports = pgConfig;
