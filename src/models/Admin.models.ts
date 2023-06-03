import mongoose from "mongoose";
import { IAdmin } from "../interfaces/admin.interface";
import { adminSchema } from "../Schemas/admin.schemas";

export const Admin = mongoose.model<IAdmin>("Admin", adminSchema);
