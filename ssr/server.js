"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const index_server_js_1 = __importDefault(require("./src/index.server.js"));
const templateFile = "./build/index.html";
const templateHTML = (0, fs_1.readFileSync)(templateFile, "utf-8");
const server = () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.static("./build", { index: false }));
    app.get("/", (req, res) => {
        const reactApp = (0, index_server_js_1.default)(req.url);
        const response = templateHTML.replace("{{APP}}", reactApp);
        return res.send(response);
    });
    return app;
};
const serverStart = () => {
    const app = server();
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
};
serverStart();
