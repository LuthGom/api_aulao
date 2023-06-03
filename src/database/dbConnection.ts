import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.set("strictPopulate", false);
const url = process.env.MONGO_URL;
const db = mongoose.connect(
  "mongodb+srv://api_aulao:D47e52HeGe6vowKQ@cluster0.wjmiw.mongodb.net/",
  { dbName: "api_aulao" }
);

db.then(() => {
  console.log("Conexão com o banco bem sucedida");
}).catch((erro) => {
  console.log({ erro: erro });

  console.log("a conexão com o banco falhou");
});

export default db;
