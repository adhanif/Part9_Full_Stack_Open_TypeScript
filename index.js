"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get("/ping", function (_req, res) {
    res.send("pong");
});
app.get("/hello", function (_req, res) {
    res.send("Hello Full Stack!");
});
var PORT = 3003;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
