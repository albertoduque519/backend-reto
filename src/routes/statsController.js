const statsService = require('../services/Stats')

exports.getDiskSpaceStatsByClient = async (req, res) => {

  let stats = await statsService.getDiskSpaceStatsByClient(req.query.idClientes)
  res.json(stats);
};

exports.getDiskSpaceStatsByDate = async (req, res) => {

  let stats = await statsService.getDiskSpaceStatsByDate(req.query.idClientes, req.query.startDate, req.query.endDate)
  res.json(stats);
};