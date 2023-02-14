"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("*", (req, res) => {
    res.send({
        msg: "hey",
        reqCode: Math.round(Math.random() * 1000),
    });
    console.log(req.ip, req.url);
});
app.listen(8080, () => {
    console.log("listening on http://localhost:8080");
});
//# sourceMappingURL=index.js.map