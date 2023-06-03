import { Schema } from "mongoose";
import { IAdmin } from "../interfaces/admin.interface";

export const adminSchema = new Schema<IAdmin>({
  nome: { type: String, required: true },
  apelido: String,
  email: { type: String, required: true },
  senha: { type: String, required: true },
  admin: { type: Boolean, required: true },
});
