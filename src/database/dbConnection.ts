import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.set("strictPopulate", false);
const url = process.env.MONGO_URL;
const db = mongoose.connect(url, { dbName: process.env.MONGO_DB });

db.then(() => {
  console.log("Conexão com o banco bem sucedida");
}).catch((erro) => {
  console.log({ erro: erro });

  console.log("a conexão com o banco falhou");
});

export default db;
