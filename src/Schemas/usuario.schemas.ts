import { Schema } from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";

export const usuarioSchema = new Schema<IUsuario>({
  nome: { type: String, require: true },
  turma: {type: String, required: true},
  email: { type: String, required: true },
});
