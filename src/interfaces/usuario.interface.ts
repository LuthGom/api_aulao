import { Document } from "mongoose";
export interface IUsuario extends Document {
  readonly nome: string;
  readonly apelido: string;
  readonly email: string;
  readonly senha: string;
}
