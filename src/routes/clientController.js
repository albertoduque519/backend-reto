const clientsService = require('../services/Clientes')

exports.getClients = async (req, res) => {
  let clientes = await clientsService.getClients(req.user)
  res.json(clientes);
};