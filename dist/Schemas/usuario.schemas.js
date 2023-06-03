"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSchema = void 0;
const mongoose_1 = require("mongoose");
exports.usuarioSchema = new mongoose_1.Schema({
    nome: { type: String, require: true },
    turma: { type: String, required: true },
    email: { type: String, required: true },
});
