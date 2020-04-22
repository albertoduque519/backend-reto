const statsService = require('../services/Stats')

exports.getDiskSpaceStatsByClient = async (req, res) => {
  //let stats = await statsService.getDiskSpaceStatsByClient(req.query.idClientes)
  let stats = [{ "tipo": "bd", "tamano": "71674688136" }, { "tipo": "logs", "tamano": "414449665" }]
  res.json(stats);
};