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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const dbClient_1 = __importDefault(require("../helpers/dbClient"));
class User {
    constructor(name) {
        this.name = name;
    }
    static createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("user", user);
            const createdUser = yield dbClient_1.default.user.create({
                data: {
                    name: user,
                },
            });
            console.log("in model", createdUser);
            return createdUser;
        });
    }
    static findUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield dbClient_1.default.user.findFirst({
                where: { name: user },
                include: {
                    todo: true,
                },
            });
            return foundUser;
        });
    }
}
exports.User = User;
