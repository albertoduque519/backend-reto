const clientsService = require('../services/Clientes')

exports.getClients = async (req, res) => {
  let clientes = await clientsService.getClients()
  res.json(clientes);
};