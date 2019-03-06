import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import updates from '../src/routes/update.route';

const app = express();

app.use(cors());
// process.env.NODE_ENV !== "prod" && app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/", express.static("public"));
app.use("/updates", updates);
// app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app;