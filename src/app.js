import express from "express";
import routes from "./routes/index.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor funcionando na porta ${PORT}`));

routes(app);
