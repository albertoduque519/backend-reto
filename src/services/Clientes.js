const ServiceError = require("../helpers/error");
const Clientes = require("../models/Clientes");

const getClients = async function (user) {
  let data = { attributes: ["id", "empresa", "capacidad_total"], raw: true };
  if (user.empresa !== "empresa") {
    data = {
      where: { empresa: toCamelCase(user.empresa) },
      attributes: ["id", "empresa", "capacidad_total"],
    };
  }
  let result = await Clientes.findAll(data).catch((err) => {
    console.log(err);
  });
  return (
    result
      .filter((item) => item.empresa != null)
      .map((item) => {
        if (item.empresa != null)
          return {
            id: item.id,
            cliente: item.empresa,
            capacidadTotal: item.capacidad_total,
          };
      }) || false
  );
};

const toCamelCase = function (str) {
  return str
    .split(" ")
    .map(function (word, index) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

module.exports = { getClients };
