import express from "express";
import routes from "./routes/index.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () =>
  console.log(`Servidor funcionando na porta ${port}`)
);

routes(app);
