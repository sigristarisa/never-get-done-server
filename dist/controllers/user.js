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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = require("../models/user");
const responses_1 = require("../helpers/responses");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userName = req.params.name;
    try {
        const createdUser = yield user_1.User.createUser(userName);
        console.log("in controller", createdUser);
        return (0, responses_1.sendDataResponse)(res, 200, createdUser);
    }
    catch (error) {
        console.error("What happened?: ", error.message);
        return (0, responses_1.sendMessageResponse)(res, 500, "Unable to create user");
    }
});
exports.createUser = createUser;
