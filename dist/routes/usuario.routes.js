"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const usuario_controllers_1 = __importDefault(require("../controllers/usuario.controllers"));
const router = (0, express_1.Router)();
router
    .post("/usuario/cadastrar", usuario_controllers_1.default.create)
    .get("/usuario/buscarTodos", usuario_controllers_1.default.findAll)
    .get("/usuario/buscarUm/email", usuario_controllers_1.default.findOne)
    .put("/usuario/atualizar/:email", usuario_controllers_1.default.update)
    .delete("/usuario/deletar/:email", usuario_controllers_1.default.delete);
const routes = (app) => {
    app.use(router);
};
exports.routes = routes;
