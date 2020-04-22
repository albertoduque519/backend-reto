const statsService = require('../services/Stats')

exports.getDiskSpaceStatsByClient = async (req, res) => {
  //try {
  // let stats = await statsService.getDiskSpaceStatsByClient(req.query.idClientes)
  // console.log("stats", stats)
  //} catch (e) {
  //console.log("stats error",e)
  // }
  let stats = [{ "tipo": "bd", "tamano": "71674688136" }, { "tipo": "logs", "tamano": "414449665" }]

  res.json(stats);
};