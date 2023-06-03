import { Schema } from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";

export const usuarioSchema = new Schema<IUsuario>({
  nome: { type: String, require: true },
  apelido: String,
  email: { type: String, required: true },
  senha: { type: String, required: true },
});
