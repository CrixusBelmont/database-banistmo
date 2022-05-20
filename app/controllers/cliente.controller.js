const db = require("../models");
const Cliente = db.clientes;
const Op = db.Sequelize.Op;


// recuperar todos los clientes de la base de datos
exports.findAll = (req, res) => {
  const id = req.query.clientnum;
  var condition = id ? { clientnum: { [Op.iLike]: `%${clientnum}%` } } : null;

  cliente.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algun error al recuperar el cliente"
      });
    });
};

// encontrar un cliente con id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cliente.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encuentra cliente con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar cliente=" + id
      });
    });
};



