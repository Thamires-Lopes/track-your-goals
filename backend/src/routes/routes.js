const express = require("express");

const UserRouter = require("./user.router")

const Router = express.Router();

Router.use(UserRouter);

module.exports = Router;