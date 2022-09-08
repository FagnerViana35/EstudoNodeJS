import express from "express";
import consign from "consign";

const PORT = 3000;

const app = express();

app.set("json spaces", 4);

consign()
    .include('models')
    .then('libs/middlewares.js')
    .then('router')
    .then('libs/boots.js')
    .into(app);

app.listen(PORT, ()=> console.log(`localhost://${PORT}`));