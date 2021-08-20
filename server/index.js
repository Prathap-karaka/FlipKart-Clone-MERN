import Express from "express";
import Dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import Connection from "./database/db.js";
import DefaultData from "./defaultData.js";
import router from "./routes/routes.js";

const app = Express();

app.use(bodyParser.json({ extender: true }));
app.use(bodyParser.urlencoded({ extender: true }));
app.use(cors());
app.use("/", router);

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
