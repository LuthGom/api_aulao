"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
mongoose_1.default.set("strictPopulate", false);
const url = process.env.MONGO_URL;
const db = mongoose_1.default.connect("mongodb+srv://api_aulao:D47e52HeGe6vowKQ@cluster0.wjmiw.mongodb.net/", { dbName: "api_aulao" });
db.then(() => {
    console.log("Conexão com o banco bem sucedida");
}).catch((erro) => {
    console.log({ erro: erro });
    console.log("a conexão com o banco falhou");
});
exports.default = db;
