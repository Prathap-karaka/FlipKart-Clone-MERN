import Express from "express";
import Dotenv from "dotenv";

import Connection from "./database/db.js";
import DefaultData from "./defaultData.js";

const app = Express();

const PORT = 8000;

Dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Default Data to database
DefaultData();
