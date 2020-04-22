const statsService = require('../services/Stats')

exports.getDiskSpaceStatsByClient = async (req, res) => {
  //let stats = await statsService.getDiskSpaceStatsByClient(req.query.idClientes)
  let stats = [{ "tipo": "bd", "tamano": "71674688136" }, { "tipo": "logs", "tamano": "414449665" }]
  if (req.query.idClientes.length > 1)
    stats = [{ "tipo": "bd", "tamano": "91674688136" }, { "tipo": "logs", "tamano": "114449665" }]
  if (req.query.idClientes.length > 2)
    stats = [{ "tipo": "bd", "tamano": "56644688146" }, { "tipo": "logs", "tamano": "214449665" }]

  res.json(stats);
};