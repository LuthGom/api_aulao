import { Document } from "mongoose";
export interface IUsuario extends Document {
  readonly nome: string;
  readonly turma: string;
  readonly email: string;
}
