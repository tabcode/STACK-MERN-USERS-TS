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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
var User = require('../models/user');
var createUser = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userSaved, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = new User(request.payload);
                return [4 /*yield*/, user.save()];
            case 1:
                userSaved = _a.sent();
                return [2 /*return*/, h.response(userSaved)];
            case 2:
                error_1 = _a.sent();
                return [2 /*return*/, h.response(error_1).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createUser = createUser;
var getUsers = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.find()];
            case 1:
                users = _a.sent();
                return [2 /*return*/, h.response(users)];
            case 2:
                error_2 = _a.sent();
                return [2 /*return*/, h.response(error_2).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUser = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var userFound, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.findById(request.params.id)];
            case 1:
                userFound = _a.sent();
                if (userFound) {
                    return [2 /*return*/, h.response(userFound)];
                }
                return [2 /*return*/, h.response('The user is not in the DB').code(404)];
            case 2:
                error_3 = _a.sent();
                return [2 /*return*/, h.response(error_3).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var deleteUser = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var userDeleted, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, User.findByIdAndDelete(request.params.id)];
            case 1:
                userDeleted = _a.sent();
                if (userDeleted) {
                    return [2 /*return*/, h.response(userDeleted)];
                }
                return [2 /*return*/, h.response('The user is not in the DB').code(404)];
            case 2:
                error_4 = _a.sent();
                return [2 /*return*/, h.response(error_4).code(500)];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
var updateUser = function (request, h) { return __awaiter(void 0, void 0, void 0, function () {
    var data, Currentuser, band, userUpdated, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                data = {
                    username: request.payload.username,
                    fullname: request.payload.fullname,
                    password: request.payload.password
                };
                return [4 /*yield*/, User.findById(request.params.id)];
            case 1:
                Currentuser = _a.sent();
                return [4 /*yield*/, Currentuser.updatePassword(data.password, Currentuser.password)];
            case 2:
                band = _a.sent();
                if (band != true)
                    data.password = band;
                else
                    delete data.password;
                return [4 /*yield*/, User.findOneAndUpdate(request.params.id, data, { new: true })];
            case 3:
                userUpdated = _a.sent();
                if (userUpdated) {
                    return [2 /*return*/, h.response(userUpdated)];
                }
                return [2 /*return*/, h.response('The user is not in the DB').code(404)];
            case 4:
                error_5 = _a.sent();
                return [2 /*return*/, h.response('There was an error').code(500)];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
