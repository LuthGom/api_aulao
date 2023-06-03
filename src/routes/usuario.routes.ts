import express, { Router, Express } from "express";

import UsuarioController from "../controllers/usuario.controllers";

const router = Router();

router
  .post("/usuario/cadastrar", UsuarioController.create)
  .get("/usuario/buscarTodos", UsuarioController.findAll)
  .get("/usuario/buscarUm/email", UsuarioController.findOne)
  .put("/usuario/atualizar/:email", UsuarioController.update)
  .delete("/usuario/deletar/:email", UsuarioController.delete);

export const routes = (app: Express):void => {
  app.use(router);
};
