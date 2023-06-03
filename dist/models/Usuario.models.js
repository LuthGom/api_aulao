"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usuario_schemas_1 = require("../Schemas/usuario.schemas");
exports.Usuario = mongoose_1.default.model("Usuario", usuario_schemas_1.usuarioSchema);
