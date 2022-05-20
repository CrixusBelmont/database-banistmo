module.exports = app => {
    const clientes = require("../controllers/cliente.controller.js");
  
    var router = require("express").Router();
  
    // recuperar todos los clientes
    router.get("/", clientes.findAll);
  
    // recuperar un cliente con id
    router.get("/:id", clientes.findOne);
  
    app.use("/api/clientes", router);
};