"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/usersdb', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(function (db) { return console.log('DB is connected'); })
    .catch(function (err) { return console.log(err); });
mongoose_1.default.set('useFindAndModify', false);
