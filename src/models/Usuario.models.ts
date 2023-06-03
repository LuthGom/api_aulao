import mongoose from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";
import { usuarioSchema } from "../Schemas/usuario.schemas";

export const Usuario = mongoose.model<IUsuario>("Usuario", usuarioSchema);
