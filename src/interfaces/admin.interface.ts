import { IUsuario } from "./usuario.interface";

export interface IAdmin extends IUsuario {
    admin: boolean;
  }