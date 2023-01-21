"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var validator = express_1.default.Router();
validator.get("/", function (req, res, next) {
    var name = req.query.name;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    if (name === undefined || Number.isNaN(width) || Number.isNaN(height)) {
        res
            .status(400)
            .send("missing parameters values, please provide the file name, (width and height in a numerical form)");
    }
    else {
        next();
    }
});
exports.default = validator;
