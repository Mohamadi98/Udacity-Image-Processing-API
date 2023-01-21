"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var Validator_1 = __importDefault(require("./routes/Validator"));
var checkCachedImage_1 = __importDefault(require("./routes/checkCachedImage"));
var app = (0, express_1.default)();
var PORT = 3000;
var middleware = [Validator_1.default, checkCachedImage_1.default, routes_1.default];
app.use("/images", middleware);
app.listen(PORT, function () {
    console.log("server started at https://localhost:".concat(PORT));
});
exports.default = app;
