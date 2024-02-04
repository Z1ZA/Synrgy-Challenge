import knex from "knex";

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "binar-car-rental",
    user: "postgres",
    password: "postgres",
  },
});

export default knexInstance;
