const statsService = require('../services/Stats')

exports.getDiskSpaceStatsByClient = async (req, res) => {
  console.log(req.query.idClient)
  let stats = await statsService.getDiskSpaceStatsByClient(req.query.idClientes)
  res.json(stats);
};