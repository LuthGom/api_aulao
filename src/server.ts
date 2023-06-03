import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const port = 3000 || process.env.PORT;

app.listen(port, () =>
  console.log(`Rodando servidor corretamente na url: localhost:${port}`)
);
