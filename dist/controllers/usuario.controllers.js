"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_models_1 = require("../models/Usuario.models");
class UsuarioController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, turma, email } = req.body;
                const usuario = { nome, turma, email };
                console.log(usuario);
                if (!nome) {
                    res.status(422).json({
                        error: true,
                        errorMessage: `O ${nome} é um campo obrigatório para cadastro!`,
                    });
                }
                else {
                    yield Usuario_models_1.Usuario.create(usuario);
                    res
                        .status(201)
                        .json({ error: false, message: "Usuario cadatrado com sucesso!" });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: true, errorMessage: error });
            }
        });
    }
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarios = yield Usuario_models_1.Usuario.find().exec();
                res.status(200).json({
                    error: false,
                    lista_usuarios: usuarios,
                });
            }
            catch (error) {
                res.status(500).json({ erro: true, errorMessage: error });
            }
        });
    }
    static findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const email = req.params.email;
                const usuario = Usuario_models_1.Usuario.find().where("email").equals(email).exec();
                if (!usuario) {
                    res
                        .status(404)
                        .json({ error: true, errorMessage: `Usuário não encontrado!` });
                }
                else {
                    res.status(200).json({ error: false, usuario: usuario });
                }
            }
            catch (error) {
                res.status(400).json({ error: true, MessageError: error });
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.params.email;
            const body = __rest(req.body, []);
            const dadosAtualizados = Object.assign({}, body);
            const usuario = Usuario_models_1.Usuario.find().where("email").equals(email).exec();
            if (!usuario) {
                res.status(404).json({
                    error: true,
                    errorMessage: "Usuário não encontrado!",
                });
            }
            else {
                try {
                    yield Usuario_models_1.Usuario.findOneAndUpdate({ email: email }, { $set: dadosAtualizados }, { new: true });
                    res.status(201).json({
                        error: false,
                        usuario: dadosAtualizados,
                    });
                }
                catch (error) {
                    res.status(400).json({
                        error: true,
                        errrMessage: error,
                    });
                }
            }
        });
    }
    static delete(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.params.email;
            const usuario = yield Usuario_models_1.Usuario.find().where("email").equals(email).exec();
            if (!usuario) {
                res.status(404).json({
                    error: true,
                    errorMessage: "Usuário não encontrado. Tente novamente!",
                });
            }
            try {
                yield Usuario_models_1.Usuario.findOneAndDelete({ email: email });
                res.status(200).json({
                    error: false,
                    message: `Usuário ${(_a = usuario[0]) === null || _a === void 0 ? void 0 : _a.nome} deletado com sucesso!`,
                });
            }
            catch (error) {
                res.status(400).json({
                    error: true,
                    errorMessage: error,
                });
            }
        });
    }
}
exports.default = UsuarioController;
