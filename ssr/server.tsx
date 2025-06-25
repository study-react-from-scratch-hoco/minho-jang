import express from "express";
import { readFileSync } from 'fs';
import render, { sheet } from "./src/index.server.js";

const templateFile = "./build/index.html";
const templateHTML = readFileSync(templateFile, "utf-8");

const server = () => {
  const app = express();

  app.use(express.static("./build", { index: false }));

  app.get("/", (req, res) => {
    const reactApp = render(req.url);
    const response = templateHTML
      .replace("{{APP}}", reactApp)
      .replace("{{STYLE}}", sheet.getStyleTags());

    return res.send(response);
  });

  return app;
}

const serverStart = () => {
  const app = server();
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
}

serverStart();
