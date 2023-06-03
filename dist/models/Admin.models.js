"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const admin_schemas_1 = require("../Schemas/admin.schemas");
exports.Admin = mongoose_1.default.model("Admin", admin_schemas_1.adminSchema);
