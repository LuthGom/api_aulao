import { Request, Response } from "express";

import mongoose, { CallbackError, ObjectId } from "mongoose";

import { Usuario } from "../models/Usuario.models";

export default class UsuarioController {
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome, apelido, email, senha } = req.body;

      const usuario = { nome, apelido, email, senha };
      const campo = nome | email | senha;
      if (!campo) {
        res.status(422).json({
          error: true,
          errorMessage: `O ${campo} é um campo obrigatório para cadastro!`,
        });
      } else {
        await Usuario.create(usuario);
        res
          .status(201)
          .json({ error: false, message: "Usuario cadatrado com sucesso!" });
      }
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: error });
    }
  }
  static async findAll(req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await Usuario.find().exec();
      res.status(200).json({
        error: false,
        lista_usuarios: usuarios,
      });
    } catch (error) {
      res.status(500).json({ erro: true, errorMessage: error });
    }
  }
  static async findOne(req: Request, res: Response): Promise<void> {
    try {
      const email = req.params.email;
      const usuario = Usuario.find().where("email").equals(email).exec();
      if (!usuario) {
        res
          .status(404)
          .json({ error: true, errorMessage: `Usuário não encontrado!` });
      } else {
        res.status(200).json({ error: false, usuario: usuario });
      }
    } catch (error) {
      res.status(400).json({ error: true, MessageError: error });
    }
  }
  static async update(req: Request, res: Response): Promise<void> {
    const email = req.params.email;

    const { ...body }: object = req.body;

    const dadosAtualizados = body;

    const usuario = Usuario.find().where("email").equals(email).exec();

    if (!usuario) {
      res.status(404).json({
        error: true,
        errorMessage: "Usuário não encontrado!",
      });
    } else {
      try {
        await Usuario.findByIdAndUpdate(
          { email: email },
          { $set: dadosAtualizados },
          { new: true }
        );
        res.status(201).json({
          error: false,
          usuario: dadosAtualizados,
        });
      } catch (error) {
        res.status(400).json({
          error: true,
          errrMessage: error,
        });
      }
    }
  }
  static async delete(req: Request, res: Response): Promise<void> {
    const email = req.params.email;

    const usuario = await Usuario.find().where("email").equals(email).exec();

    if (!usuario) {
        res.status(404).json({
          error: true,
          errorMessage: "Usuário não encontrado. Tente novamente!",
        });
      }
      try {
        await Usuario.findByIdAndDelete(email);
        res
          .status(200)
          .json({
            error: false,
            message: `Usuário ${usuario[0]?.nome} deletado com sucesso!`,
          });
        }catch(error){}
  }
}
